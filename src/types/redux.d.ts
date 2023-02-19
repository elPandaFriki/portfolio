export declare global {
    namespace Redux {
        namespace ActionPayload {
            interface UpdateExample {
                value: number;
            }
        }

        namespace ThunkPayload {
            type UpdateExample = {
                value: number;
            };
        }

        namespace InitialState {
            interface Example {
                value: number;
            }
        }
    }
}
