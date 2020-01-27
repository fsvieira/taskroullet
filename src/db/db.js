import Dexie from "dexie";

import "dexie-observable";
import "dexie-syncable";
import uuidv4 from "uuid/v4";

export const db = new Dexie("taskroulette");

db.version(1).stores({
	tasks: "&taskID,createdAt,updatedAt,description,tags,deleted,done,[deleted+done]",
	sprints: "&sprintID,createdAt,dueDate,tags",
	todo: "&todoID,taskID,filterTags"
});

export const genID = uuidv4;


const listenners = new Set();

db.on("changes", changes => {
	for (let fn of listenners) {
		fn(changes);
	}
});

export const changes = fn => {
	listenners.add(fn);

	return () => listenners.delete(fn);
};
