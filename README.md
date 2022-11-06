This is just a simple project to learn some technology.

## Technology Used

- [Next.js](https://nextjs.org) (superset of React.js) for a UI (browser-based)
- [PocketBase](https://pocketbase.io) for a database
- [Ant Design](https://ant.design/components/overview/) for CSS and components
- [Docker](https://www.docker.com) used to setup local development and deployment

## Run the solution

```shell
docker-compose up -d --build
```

- UI: http://localhost:3000
- PocketBase Admin: [http://localhost:8090/_](http://localhost:8090/_)
- PocketBase REST API: http://localhost:8090/api

## Shut Down the Solution

```shell
docker-compose down
```