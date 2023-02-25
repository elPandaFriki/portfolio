import { store } from '../redux';

export declare global {
    namespace Redux {
        type Store = ReturnType<typeof store.getState>;
        type Dispatch = typeof store.dispatch;
        namespace Action {
            interface UpdateExample {
                value: number;
            }
        }

        namespace Thunk {
            type UpdateExample = {
                value: number;
            };
        }

        namespace Reducer {
            interface Example {
                value: number;
            }
        }
    }
}
