import ApiError from '../utils/ApiError.js';
import httpStatus from 'http-status';
import Room from '../models/room.model.js';

/**
 * Creates a new room in the database.
 * @param {Object} roomBody - The details of the room to create.
 * @returns {Promise<Object>} The created room document.
 * @throws {ApiError} If room creation fails.
 */
const createRoom = async (roomBody) => {
  try {
    const room = await Room.create(roomBody);
    return room;
  } catch (error) {
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

export default { createRoom, getRooms, getRoom, updateRoom, deleteRoom };
