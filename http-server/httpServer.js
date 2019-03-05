import http from 'http';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Pesto Bootcamp!\n');
});

const httpServer = {
  listen: (PORT) => {
    server.listen(PORT, () => {
      console.log(`listening at${PORT}`);
    });
  },
  close: () => {
    server.close(3000);
  },
};

export { httpServer };
