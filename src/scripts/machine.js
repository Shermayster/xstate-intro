import { Machine, assign } from "xstate";

export const machine = Machine({
  id: "machine",
  initial: "active",
  context: {
    count: 0,
  },
  states: {
    active: {
      always: { target: "disabled", cond: (ctx) => ctx.count >= 5 },
      on: {
        INCREMENT: {
          actions: assign({
            count: (ctx) => ctx.count + 1,
          }),
        },
      },
    },
    disabled: {
      on: {
        RESET: {
          target: "active",
          actions: assign({
            count: () => 0,
          }),
        },
      },
    },
  },
});
