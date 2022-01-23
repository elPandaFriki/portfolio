import { createAction } from "@reduxjs/toolkit";
import { UpdateExample } from "../types";

const UPDATE_EXAMPLE = createAction<UpdateExample>("updateExample");

export { UPDATE_EXAMPLE };
