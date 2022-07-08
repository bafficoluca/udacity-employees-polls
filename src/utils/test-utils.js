import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";

const initialState = {
  users: {
    sarahedo: {
      id: "sarahedo",
      password: "password123",
      name: "Sarah Edo",
      avatarURL: "/sarahedo.png",
      answers: {
        "8xf0y6ziyjabvozdd253nd": "optionOne",
        "6ni6ok3ym7mf1p33lnez": "optionOne",
        am8ehyc8byjqgar0jgpub9: "optionTwo",
        loxhs1bqm25b708cmbf3g: "optionTwo",
      },
      questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
    },
    mtsamis: {
      id: "mtsamis",
      password: "xyz123",
      name: "Mike Tsamis",
      avatarURL: "/miketsamis.png",
      answers: {
        xj352vofupe1dqz9emx13r: "optionOne",
        vthrdm985a262al8qx3do: "optionTwo",
        "6ni6ok3ym7mf1p33lnez": "optionOne",
      },
      questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
    },
  },
  authedUser: null,
  polls: {
    "8xf0y6ziyjabvozdd253nd": {
      id: "8xf0y6ziyjabvozdd253nd",
      author: "sarahedo",
      timestamp: 1467166872634,
      optionOne: {
        votes: ["sarahedo"],
        text: "Build our new application with Javascript",
      },
      optionTwo: {
        votes: [],
        text: "Build our new application with Typescript",
      },
    },
  },
};

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: reducer,
    preloadedState,
  });
};

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export const store = createStore(reducer, initialState, middleware);

export const notLoggedInInitialState = {
  users: {
    sarahedo: {
      id: "sarahedo",
      password: "password123",
      name: "Sarah Edo",
      avatarURL: "/sarahedo.png",
      answers: {
        "8xf0y6ziyjabvozdd253nd": "optionOne",
        "6ni6ok3ym7mf1p33lnez": "optionOne",
        am8ehyc8byjqgar0jgpub9: "optionTwo",
        loxhs1bqm25b708cmbf3g: "optionTwo",
      },
      questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
    },
    mtsamis: {
      id: "mtsamis",
      password: "xyz123",
      name: "Mike Tsamis",
      avatarURL: "/miketsamis.png",
      answers: {
        xj352vofupe1dqz9emx13r: "optionOne",
        vthrdm985a262al8qx3do: "optionTwo",
        "6ni6ok3ym7mf1p33lnez": "optionOne",
      },
      questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
    },
  },
  authedUser: null,
  polls: {
    "8xf0y6ziyjabvozdd253nd": {
      id: "8xf0y6ziyjabvozdd253nd",
      author: "sarahedo",
      timestamp: 1467166872634,
      optionOne: {
        votes: ["sarahedo"],
        text: "Build our new application with Javascript",
      },
      optionTwo: {
        votes: [],
        text: "Build our new application with Typescript",
      },
    },
    xj352vofupe1dqz9emx13r: {
      id: "xj352vofupe1dqz9emx13r",
      author: "mtsamis",
      timestamp: 1493579767190,
      optionOne: {
        votes: ["mtsamis", "zoshikanlu"],
        text: "deploy to production once every two weeks",
      },
      optionTwo: {
        votes: ["tylermcginnis"],
        text: "deploy to production once every month",
      },
    },
  },
};

export const loggedInInitialState = {
  users: {
    sarahedo: {
      id: "sarahedo",
      password: "password123",
      name: "Sarah Edo",
      avatarURL: "/sarahedo.png",
      answers: {
        "8xf0y6ziyjabvozdd253nd": "optionOne",
        "6ni6ok3ym7mf1p33lnez": "optionOne",
        am8ehyc8byjqgar0jgpub9: "optionTwo",
        loxhs1bqm25b708cmbf3g: "optionTwo",
      },
      questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
    },
    mtsamis: {
      id: "mtsamis",
      password: "xyz123",
      name: "Mike Tsamis",
      avatarURL: "/miketsamis.png",
      answers: {
        xj352vofupe1dqz9emx13r: "optionOne",
        vthrdm985a262al8qx3do: "optionTwo",
        "6ni6ok3ym7mf1p33lnez": "optionOne",
      },
      questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
    },
  },
  authedUser: "tylermcginnis",
  polls: {
    "8xf0y6ziyjabvozdd253nd": {
      id: "8xf0y6ziyjabvozdd253nd",
      author: "sarahedo",
      timestamp: 1467166872634,
      optionOne: {
        votes: ["sarahedo"],
        text: "Build our new application with Javascript",
      },
      optionTwo: {
        votes: [],
        text: "Build our new application with Typescript",
      },
    },
    xj352vofupe1dqz9emx13r: {
      id: "xj352vofupe1dqz9emx13r",
      author: "mtsamis",
      timestamp: 1493579767190,
      optionOne: {
        votes: ["mtsamis", "zoshikanlu"],
        text: "deploy to production once every two weeks",
      },
      optionTwo: {
        votes: ["tylermcginnis"],
        text: "deploy to production once every month",
      },
    },
  },
};
