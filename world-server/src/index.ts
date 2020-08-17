import { Server } from './network';
import { World } from './world';

let srv: Server = new Server();
srv.init(8080);

let world: World = new World(1200);
world.init()