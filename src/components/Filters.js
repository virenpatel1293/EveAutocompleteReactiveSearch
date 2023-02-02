/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import get from "lodash.get";
import { Collapse } from "antd";
import { ReactiveComponent } from "@appbaseio/reactivesearch";
import createDOMPurify from "dompurify";
import { getReactDependenciesFromPreferences, staticFacetsIds } from "../utils";
import { mediaMax } from "../utils/media";

const DOMPurify = createDOMPurify(window);
const { Panel } = Collapse;

const loaderStyle = css`
  margin: 10px 0;
  position: relative;
`;

const Filters = ({
  theme,
  isMobile,
  themeType,
  preferences,
  toggleFilters,
  getFontFamily,
  pageSettings
}) => {
  const queryFormatMillisecondsMap = {
    // the below are arranged in asscending order
    // please maintain the order if adding/ removing property(s)
    minute: 60000,
    hour: 3600000,
    day: 86400000,
    week: 604800000,
    month: 2629746000,
    quarter: 7889238000,
    year: 31556952000
  };

  const getCalendarIntervalErrorMessage = (
    totalRange,
    calendarInterval = "minute"
  ) => {
    const queryFormatMillisecondsMapKeys = Object.keys(
      queryFormatMillisecondsMap
    );
    const indexOfCurrentCalendarInterval = queryFormatMillisecondsMapKeys.indexOf(
      calendarInterval
    );
    if (indexOfCurrentCalendarInterval === -1) {
      console.error("Invalid calendarInterval Passed");
    }

    if (calendarInterval === "year") {
      return "Try using a shorter range of values.";
    }

    for (
      let index = indexOfCurrentCalendarInterval + 1;
      index < queryFormatMillisecondsMapKeys.length;
      index += 1
    ) {
      if (
        totalRange / Object.values(queryFormatMillisecondsMap)[index] <=
        100
      ) {
        const calendarIntervalKey = queryFormatMillisecondsMapKeys[index];
        return {
          errorMessage: `Please pass calendarInterval prop with value greater than or equal to a \`${calendarIntervalKey}\` for a meaningful resolution of histogram.`,
          calculatedCalendarInterval: calendarIntervalKey
        };
      }
    }

    return {
      errorMessage: "Try using a shorter range of values.",
      calculatedCalendarInterval: "year"
    }; // we return the highest possible interval to shorten then interval value
  };

  const componentSettings = get(
    pageSettings,
    `pages.${pageSettings.currentPage}.componentSettings`,
    {}
  );

  const filters = Object.keys(componentSettings).filter(
    (i) => i !== "search" && i !== "result" && !staticFacetsIds.includes(i)
  );

  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax (250px, 1fr))",
        gridGap: 0,
        alignSelf: "start",
        border: themeType === "classic" ? "1px solid #eee" : 0,
        [mediaMax.medium]: {
          display: toggleFilters ? "grid" : "none",
          gridTemplateColumns: "1fr"
        },
        boxShadow:
          themeType === "minimal"
            ? `0 0 4px ${get(theme, "colors.titleColor")}1a`
            : 0,
        [mediaMax.medium]: {
          display: toggleFilters ? "grid" : "none"
        }
      }}
    >
      <Collapse
        bordered={false}
        defaultActiveKey={getReactDependenciesFromPreferences(preferences)}
      >
        {filters.map((filter) => {
          const facet = componentSettings[filter];
          const type = get(facet, "rsConfig.filterType", "");
          let dateProps = {};

          if (type === "date") {
            const calendarInterval = get(
              facet,
              "rsConfig.calendarInterval",
              "year"
            );
            dateProps = {
              queryFormat: "date",
              // eslint-disable-next-line
              calendarInterval: calendarInterval
                ? calendarInterval
                : getCalendarIntervalErrorMessage(
                    new Date(get(facet, "rsConfig.startValue", "")) -
                      new Date(get(facet, "rsConfig.endValue", ""))
                  ).calculatedCalendarInterval
            };
          }
          if (!facet || !facet?.enabled) return null;

          return (
            <Panel
              header={
                <span
                  style={{
                    color: "#007de7",
                    fontWeight: "500",
                    fontSize: "15px"
                  }}
                >
                  {get(facet, "rsConfig.title")}
                </span>
              }
              showArrow={themeType !== "minimal"}
              key={filter}
              css={{
                ...getFontFamily,
                maxWidth: isMobile ? "none" : "298px"
              }}
              className="filter"
            >
              {/* eslint-disable-next-line no-nested-ternary */}
              {facet.enabled ? (
                // eslint-disable-next-line no-nested-ternary
                type === "list" ? (
                  <ReactiveComponent
                    preferencesPath={`pageSettings.pages.${pageSettings.currentPage}.componentSettings.${filter}`}
                    componentId={filter}
                    innerClass={{
                      input: "list-input"
                    }}
                    URLParams
                    loader={
                      <div
                        css={loaderStyle}
                        // eslint-disable-next-line
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(
                            get(
                              facet,
                              "customMessages.loading",
                              "Loading options"
                            )
                          )
                        }}
                      />
                    }
                    renderNoResults={() => (
                      <div
                        // eslint-disable-next-line
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(
                            get(
                              facet,
                              "customMessages.noResults",
                              "No items Found"
                            )
                          )
                        }}
                        className="hide_nb"
                      />
                    )}
                    css={getFontFamily}
                    react={{
                      and: getReactDependenciesFromPreferences(
                        preferences,
                        filter
                      )
                    }}
                    filterLabel={get(facet, "rsConfig.title", "")}
                    title=""
                  />
                ) : facet?.rsConfig?.startValue && facet?.rsConfig?.endValue ? (
                  <ReactiveComponent
                    componentId={get(facet, "rsConfig.componentId", "")}
                    preferencesPath={`pageSettings.pages.${pageSettings.currentPage}.componentSettings.${filter}`}
                    URLParams
                    css={getFontFamily}
                    filterLabel={get(facet, "rsConfig.title", "")}
                    range={{
                      start:
                        type === "date"
                          ? new Date(get(facet, "rsConfig.startValue", ""))
                          : parseInt(get(facet, "rsConfig.startValue", ""), 10),
                      end:
                        type === "date"
                          ? new Date(get(facet, "rsConfig.endValue", ""))
                          : parseInt(get(facet, "rsConfig.endValue", ""), 10)
                    }}
                    rangeLabels={{
                      start: get(facet, "rsConfig.startLabel", ""),
                      end: get(facet, "rsConfig.endLabel", "")
                    }}
                    title=""
                    {...dateProps}
                  />
                ) : (
                  <ReactiveComponent
                    preferencesPath={`pageSettings.pages.${pageSettings.currentPage}.componentSettings.${filter}`}
                    componentId={filter}
                    URLParams
                    css={getFontFamily}
                    filterLabel={get(facet, "rsConfig.title", "")}
                    title=""
                    {...dateProps}
                  />
                )
              ) : null}
            </Panel>
          );
        })}
      </Collapse>
    </div>
  );
};

export default Filters;
