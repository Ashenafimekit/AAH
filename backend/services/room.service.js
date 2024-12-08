import ApiError from '../utils/ApiError.js';
import httpStatus from 'http-status';
import Room from '../models/room.model.js';
import logger from '../config/logger.js';

/**
 * Creates a new room in the database.
 * @param {Object} roomBody - The details of the room to create.
 * @returns {Promise<Object>} The created room document.
 * @throws {ApiError} If room creation fails.
 */
const createRoom = async (roomBody) => {
  const {
    roomType,
    roomNos = [],
    numberOfRooms = 1,
    numberOfBeds,
    amenities,
    price,
  } = roomBody;
  try {
    let roomTypeData = await Room.findOne({ roomType });
    if (roomNos.length && roomNos.length !== numberOfRooms) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        'Room numbers must match the number of rooms specified',
      );
    }

    const roomNumbers = roomNos.length
      ? roomNos
      : Array.from({ length: numberOfRooms }, (_, i) => i + 100);

    if (!roomTypeData) {
      roomTypeData = Room.create({
        roomType,
        rooms: roomNumbers.map((roomNo) => ({ roomNo, status: 'available' })),
        numberOfBeds,
        amenities,
        price,
      });
    } else {
      const existingRoomNumbers = roomTypeData.rooms.map((room) => room.roomNo);
      const duplicateRoomNumbers = roomNumbers.filter((roomNo) =>
        existingRoomNumbers.includes(roomNo),
      );
      if (duplicateRoomNumbers.length) {
        logger.info('Room numbers already exist: ', duplicateRoomNumbers);
        throw new ApiError(
          httpStatus.BAD_REQUEST,
          `Room numbers already exist ${duplicateRoomNumbers.join(', ')}`,
        );
      }
      roomNumbers.forEach((roomNo) => {
        roomTypeData.rooms.push({ roomNo, status: 'available' });
      });
      roomTypeData.price = price;
      roomTypeData.amenities = [
        ...new Set([...roomTypeData.amenities, ...amenities]),
      ];
      await roomTypeData.save();
    }
    return roomTypeData;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(httpStatus.BAD_REQUEST, 'Room creation failed');
  }
};

/**
 * Retrieves all rooms from the database.
 * @returns {Promise<Array>} An array of room documents.
 * @throws {ApiError} If retrieving rooms fails.
 */
const getRooms = async () => {
  try {
    const rooms = await Room.find();
    return rooms;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Room retrieval failed');
  }
};

const getRoomTypes = async () => {
  try {
    const rooms = await Room.aggregate([
      {
        $group: {
          _id: '$roomType',
          price: { $first: '$price' },
          amenities: { $addToSet: '$amenities' },
        },
      },
      {
        $project: {
          _id: 0,
          roomType: '$_id',
          price: 1,
          amenities: {
            $reduce: {
              input: '$amenities',
              initialValue: [],
              in: { $setUnion: ['$$value', '$$this'] },
            },
          },
        },
      },
    ]);
    return rooms;
  } catch (error) {
    logger.info('logging error');
    logger.error(error);
    throw new ApiError(httpStatus.BAD_REQUEST, 'Room retrieval failed');
  }
};

/**
 * Retrieves room counts by type and status.
 * @returns {Promise<Array>} Aggregated room data with counts by type and status.
 */
const getRoomSummaryByType = async () => {
  try {
    const summary = await Room.aggregate([
      {
        $unwind: '$rooms',
      },
      {
        $group: {
          _id: { roomType: '$roomType', status: '$rooms.status' },
          count: { $sum: 1 },
        },
      },
      {
        $group: {
          _id: '$_id.roomType',
          total: { $sum: '$count' },
          available: {
            $sum: {
              $cond: [{ $eq: ['$_id.status', 'available'] }, '$count', 0],
            },
          },
          booked: {
            $sum: {
              $cond: [{ $eq: ['$_id.status', 'booked'] }, '$count', 0],
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          roomType: '$_id',
          total: 1,
          available: 1,
          booked: 1,
        },
      },
    ]);

    const result = summary.reduce((acc, item) => {
      acc[item.roomType] = {
        total: item.total,
        available: item.available,
        booked: item.booked,
      };
      return acc;
    }, {});

    return result;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Room summary retrieval failed');
  }
};

/**
 * Retrieves a specific room by its ID.
 * @param {string} roomId - The ID of the room to retrieve.
 * @returns {Promise<Object>} The room document if found.
 * @throws {ApiError} If the room is not found or retrieval fails.
 */
const getRoom = async (roomId) => {
  try {
    const room = await Room.findById(roomId);
    if (!room) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Room not found');
    }
    return room;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Room retrieval failed');
  }
};

const updateRoomType = async (roomType, updateBody) => {
  try {
    const updatedRoom = await Room.findOneAndUpdate(
      { roomType: roomType },
      { $set: updateBody },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedRoom) {
      throw new ApiError(
        httpStatus.NOT_FOUND,
        `Room type "${roomType}" not found.`,
      );
    }

    return updatedRoom;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Room update failed');
  }
};

/**
 * Updates a specific room by its ID.
 * @param {string} roomId - The ID of the room to update.
 * @param {Object} updateBody - The fields to update in the room.
 * @returns {Promise<Object>} The updated room document.
 * @throws {ApiError} If the room is not found or the update fails.
 */
const updateRoom = async (roomId, updateBody) => {
  try {
    const room = await Room.findByIdAndUpdate(
      roomId,
      { $set: updateBody }, // to update only the provided fields
      {
        new: true,
        runValidators: true,
      },
    );
    if (!room) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Room not found');
    }
    return room;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Room update failed');
  }
};

/**
 * Deletes a specific room by its ID.
 * @param {string} roomId - The ID of the room to delete.
 * @returns {Promise<void>} Resolves if deletion is successful.
 * @throws {ApiError} If the room is not found or the deletion fails.
 */
const deleteRoom = async (roomId) => {
  try {
    const room = await Room.findByIdAndDelete(roomId);
    if (!room) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Room not found');
    }
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Room deletion failed');
  }
};

const getPrice = async () => {
  try {
    const price = await Room.find({}, { roomType: 1, price: 1 });
    logger.info('price');
    logger.info(price);
    return price;
  } catch (error) {
    logger.error(error);
    throw new ApiError(httpStatus.BAD_REQUEST, 'unable to fetch room price');
  }
};

export default {
  createRoom,
  getRooms,
  getRoom,
  updateRoom,
  deleteRoom,
  getRoomTypes,
  getRoomSummaryByType,
  updateRoomType,
  getPrice,
};
