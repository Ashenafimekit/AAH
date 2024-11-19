import express from 'express';
import http from 'http';

const startServer = async () => {
  const app = express();
};

(async () => {
  try {
    await startServer();
  } catch (error) {
    // process.exit(1);
    throw new Error(error);
  }
})();