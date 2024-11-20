import Router from 'express';
import {
  createRoom,
  getRooms,
  getRoom,
  updateRoom,
  deleteRoom,
} from '../controllers/room.controller.js';

const router = Router();

router.post('/room/add', createRoom);
router.get('/room/list', getRooms);
router.get('/room/:roomId', getRoom);
router.put('/room/update/:roomId', updateRoom);
router.delete('/room/delete/:roomId', deleteRoom);

export default router;
