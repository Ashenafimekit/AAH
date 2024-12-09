import Router from 'express';
import {
  createRoom,
  getRooms,
  getRoom,
  updateRoom,
  deleteRoom,
  getRoomTypes,
  getRoomSummaryByType,
  updateRoomType,
  getPrice,
} from '../controllers/room.controller.js';
import { authenticateUser } from '../middlewares/authenticateUser.js';

const router = Router();

router.post('/room/add', authenticateUser, createRoom);
router.get('/room/list', authenticateUser, getRooms);
router.get('/room/roomTypes', authenticateUser, getRoomTypes);
router.get('/room/roomTypeSummary', authenticateUser, getRoomSummaryByType);
router.get('/room/getPrice', getPrice);
router.put('/update/:roomType', updateRoomType);
router.delete('/room/delete/:roomId', authenticateUser, deleteRoom);
router.put('/room/update/:roomId', authenticateUser, updateRoom);
router.get('/room/:roomId', authenticateUser, getRoom);

export default router;
