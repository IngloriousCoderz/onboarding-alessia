import { createAction } from "@reduxjs/toolkit";

export const setText = createAction("form/setText");
export const addTask = createAction("app/addTask");
export const toggleCompleted = createAction("list/toggleCompleted");
export const removeTask = createAction("list/removeTask");
