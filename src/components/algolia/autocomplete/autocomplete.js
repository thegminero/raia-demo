import React from "react";
import {
  createElement,
  Fragment,
  useEffect,
  useRef,
  useState
} from "react";
import { render } from "react-dom";

import { usePagination, useSearchBox } from "react-instantsearch-hooks";
import { autocomplete } from "@algolia/autocomplete-js";

import "@algolia/autocomplete-theme-classic";


export function Autocomplete({
  className,
  ...autocompleteProps
}) {
  const autocompleteContainer = useRef(null);

  const { query, refine: setQuery } = useSearchBox();
  const { refine: setPage } = usePagination();

  const [instantSearchUiState, setInstantSearchUiState] = useState({ query });

  useEffect(() => {
    setQuery(instantSearchUiState.query);
    setPage(0);
  }, [instantSearchUiState]);

  useEffect(() => {
    if (!autocompleteContainer.current) {
      return;
    }

    const autocompleteInstance = autocomplete({
      ...autocompleteProps,
      container: autocompleteContainer.current,
      initialState: { query },
      onReset() {
        setInstantSearchUiState({ query: "" });
      },
      onSubmit({ state }) {
        setInstantSearchUiState({ query: state.query });
      },
      onStateChange({ prevState, state }) {
        if (prevState.query !== state.query) {
          setInstantSearchUiState({
            query: state.query
          });
        }
      },
      renderer: { createElement, Fragment, render },
    });

    return () => autocompleteInstance.destroy();
  }, []);

  return <div className={className} ref={autocompleteContainer} />;
}
