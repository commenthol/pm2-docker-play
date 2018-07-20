# pm2-docker-play

> playing with docker and pm2

- start with `docker-compose up -d --build`
- no logging to disk / just journalctl
- run under different user than `root`
- run a "master" and slave processes
  - idea: run cron jobs inside "master"
