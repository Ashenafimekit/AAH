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

const router = Router();

router.post('/room/add', createRoom);
router.get('/room/list', getRooms);
router.get('/room/roomTypes', getRoomTypes);
router.get('/room/roomTypeSummary', getRoomSummaryByType);
router.get('/room/getPrice', getPrice);
router.put('/update/:roomType', updateRoomType);
router.delete('/room/delete/:roomId', deleteRoom);
router.put('/room/update/:roomId', updateRoom);
router.get('/room/:roomId', getRoom);

export default router;
