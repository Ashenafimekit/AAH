import catchAsync from '../utils/catchAsync.js';
import roomService from '../services/room.service.js';
import httpstatus from 'http-status';
import logger from '../config/logger.js';

export const createRoom = catchAsync(async (req, res) => {
  const room = await roomService.createRoom(req.body);
  logger.info('Room created successfully');
  res.status(httpstatus.CREATED).json({ success: true, room: room });
});

export const getRooms = catchAsync(async (req, res) => {
  const rooms = await roomService.getRooms();
  res.status(httpstatus.OK).json({ success: true, rooms: rooms });
});

export const getRoom = catchAsync(async (req, res) => {
  const room = await roomService.getRoom(req.params.roomId);
  res.status(httpstatus.OK).json({ success: true, room: room });
});

export const getRoomTypes = catchAsync(async (req, res) => {
  const rooms = await roomService.getRoomTypes();
  res.status(httpstatus.OK).json({ success: true, rooms: rooms });
});

export const getRoomSummaryByType = catchAsync(async (req, res) => {
  const roomSummary = await roomService.getRoomSummaryByType();
  res.status(httpstatus.OK).json({ success: true, roomSummary: roomSummary });
});

export const updateRoom = catchAsync(async (req, res) => {
  const room = await roomService.updateRoom(req.params.roomId, req.body);
  res.status(httpstatus.OK).json({ success: true, updatedRoom: room });
});

export const updateRoomType = catchAsync(async (req, res) => {
  const room = await roomService.updateRoomType(req.params.roomType, req.body);
  logger.info('Room updated successfully');
  res.status(httpstatus.OK).json({ success: true, updatedRoom: room });
});

export const deleteRoom = catchAsync(async (req, res) => {
  await roomService.deleteRoom(req.params.roomId);
  res
    .status(httpstatus.NO_CONTENT)
    .json({ success: true, message: 'Room deleted Successfully' });
});

export const getPrice = catchAsync(async (req, res) => {
  const price = await roomService.getPrice();
  res.status(httpstatus.OK).json({ success: true, roomPrice: price });
});
