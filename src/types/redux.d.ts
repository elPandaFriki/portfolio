export {};

import { store } from '../redux';

declare global {
    namespace Redux {
        type Store = ReturnType<typeof store.getState>;
        type Dispatch = typeof store.dispatch;
        namespace Action {
            type UpdateExample = {
                value: number;
            }
        }

        namespace Thunk {
            type UpdateExample = {
                value: number;
            };
        }

        namespace Reducer {
            type Example = {
                value: number;
            }
        }
    }
}
