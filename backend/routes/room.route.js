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
} from '../controllers/room.controller.js';

const router = Router();

router.post('/room/add', createRoom);
router.get('/room/list', getRooms);
router.get('/room/roomTypes', getRoomTypes);
router.get('/room/roomTypeSummary', getRoomSummaryByType);
router.get('/room/:roomId', getRoom);
router.put('/room/update/:roomId', updateRoom);
router.put('/update/:roomType', updateRoomType);
router.delete('/room/delete/:roomId', deleteRoom);

export default router;
