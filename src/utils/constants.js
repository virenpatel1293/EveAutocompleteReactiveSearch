const appbasePrefs = {
  name: "Search eve-app",
  description: "eve_products-app",
  pipeline: "eve_products",
  id: "f3aa2b29-0e00-4644-b624-c02f096f611a",
  pageSettings: {
    currentPage: "home",
    pages: {
      home: {
        componentSettings: {
          search: {
            componentType: "SEARCHBOX",
            customMessages: {
              noResults: "No suggestions found for <mark>[term]</mark>"
            },
            searchButton: {
              icon: "",
              text: "Search for a product"
            },
            redirectUrlText: "View Product",
            redirectUrlIcon: "",
            fields: {
              title: "Name",
              description: "ShortDescription",
              price: "PriceIncVat",
              priceUnit: "R",
              image: "ProductImage",
              handle: "Url"
            },
            rsConfig: {
              autosuggest: true,
              showVoiceSearch: true,
              componentType: "SEARCHBOX"
            }
          },
          result: {
            componentType: "REACTIVELIST",
            fields: {
              title: "Name",
              description: "ShortDescription",
              price: "PriceIncVat",
              priceUnit: "R",
              image: "ProductImage",
              handle: "Url"
            },
            customMessages: {
              resultStats: "[count] products found in [time] ms",
              noResults: "No Results Found!"
            },
            rsConfig: {
              pagination: false,
              infiniteScroll: true,
              componentType: "REACTIVELIST"
            },
            sortOptionSelector: [
              {
                dataField: "_score",
                label: "Sort By",
                sortBy: "desc"
              },
              {
                dataField: "PriceIncVat",
                label: "Low To High",
                sortBy: "asc"
              },
              {
                dataField: "PriceIncVat",
                label: "High To Low",
                sortBy: "desc"
              }
            ],
            resultHighlight: true,
            layout: "grid",
            viewSwitcher: true
          },
          Price_0: {
            enabled: true,
            customMessages: {
              loading: "Fetching Options",
              noResults: "No items Found"
            },
            rsConfig: {
              componentId: "Price_0",
              filterLabel: null,
              title: "Price",
              dataField: "PriceIncVat",
              missingLabel: null,
              selectAllLabel: null,
              filterType: "range",
              queryFormat: null,
              sortBy: "count",
              componentType: "DYNAMICRANGESLIDER",
              showCount: true,
              showCheckbox: true,
              showSearch: true,
              showMissing: false,
              multiSelect: false,
              showHistogram: false
            },
            componentType: "DYNAMICRANGESLIDER",
            facetType: "dynamic"
          },
          Category_1: {
            enabled: true,
            customMessages: {
              loading: "Fetching Options",
              noResults: "No items Found"
            },
            rsConfig: {
              componentId: "Category_1",
              filterLabel: null,
              title: "Category",
              dataField: "Category1.keyword",
              size: 5,
              missingLabel: null,
              selectAllLabel: null,
              filterType: "list",
              queryFormat: "or",
              sortBy: "count",
              componentType: "MULTILIST",
              showCount: true,
              showCheckbox: true,
              showSearch: true,
              showMissing: false,
              multiSelect: false
            },
            componentType: "MULTILIST",
            facetType: "dynamic"
          },
          Brand_2: {
            enabled: true,
            customMessages: {
              loading: "Fetching Options",
              noResults: "No items Found"
            },
            rsConfig: {
              componentId: "Brand_2",
              filterLabel: null,
              title: "Brand",
              dataField: "Brand.keyword",
              size: 5,
              missingLabel: null,
              selectAllLabel: null,
              filterType: "list",
              queryFormat: "or",
              sortBy: "count",
              componentType: "MULTILIST",
              showCount: true,
              showCheckbox: true,
              showSearch: true,
              showMissing: false,
              multiSelect: true
            },
            componentType: "MULTILIST",
            facetType: "dynamic"
          },
          CPU_3: {
            enabled: true,
            customMessages: {
              loading: "Fetching Options",
              noResults: "No items Found"
            },
            rsConfig: {
              componentId: "CPU_3",
              filterLabel: null,
              title: "CPU",
              dataField: "Attributes.CPU.keyword",
              size: 5,
              missingLabel: null,
              selectAllLabel: null,
              filterType: "list",
              queryFormat: "and",
              sortBy: "asc",
              componentType: "MULTILIST",
              showCount: true,
              showCheckbox: true,
              showSearch: true,
              showMissing: false,
              multiSelect: false
            },
            componentType: "MULTILIST",
            facetType: "dynamic"
          },
          GPU_Series_4: {
            enabled: true,
            customMessages: {
              loading: "Fetching Options",
              noResults: "No items Found"
            },
            rsConfig: {
              componentId: "GPU_Series_4",
              filterLabel: null,
              title: "GPU Series",
              dataField: "Attributes.GPUSeries.keyword",
              size: 5,
              missingLabel: null,
              selectAllLabel: null,
              filterType: "list",
              queryFormat: "and",
              sortBy: "count",
              componentType: "MULTILIST",
              showCount: true,
              showCheckbox: true,
              showSearch: true,
              showMissing: false,
              multiSelect: false
            },
            componentType: "MULTILIST",
            facetType: "dynamic"
          },
          Screen_Size_5: {
            enabled: true,
            customMessages: {
              loading: "Fetching Options",
              noResults: "No items Found"
            },
            rsConfig: {
              componentId: "Screen_Size_5",
              filterLabel: null,
              title: "Screen Size",
              dataField: "Attributes.ScreenSize.keyword",
              size: 5,
              missingLabel: null,
              selectAllLabel: null,
              filterType: "list",
              queryFormat: "and",
              sortBy: "count",
              componentType: "MULTILIST",
              showCount: true,
              showCheckbox: true,
              showSearch: true,
              showMissing: false,
              multiSelect: false
            },
            componentType: "MULTILIST",
            facetType: "dynamic"
          },
          Memory_6: {
            enabled: true,
            customMessages: {
              loading: "Fetching Options",
              noResults: "No items Found"
            },
            rsConfig: {
              componentId: "Memory_6",
              filterLabel: null,
              title: "Memory",
              dataField: "Attributes.MemorySize.keyword",
              size: 5,
              missingLabel: null,
              selectAllLabel: null,
              filterType: "list",
              queryFormat: "and",
              sortBy: "count",
              componentType: "MULTILIST",
              showCount: true,
              showCheckbox: true,
              showSearch: true,
              showMissing: false,
              multiSelect: false
            },
            componentType: "MULTILIST",
            facetType: "dynamic"
          },
          Warranty_Info_7: {
            enabled: true,
            customMessages: {
              loading: "Fetching Options",
              noResults: "No items Found"
            },
            rsConfig: {
              componentId: "Warranty_Info_7",
              filterLabel: null,
              title: "Warranty Info",
              dataField: "WarrantyInfo.keyword",
              size: 5,
              missingLabel: null,
              selectAllLabel: null,
              filterType: "list",
              queryFormat: "and",
              sortBy: "count",
              componentType: "MULTILIST",
              showCount: true,
              showCheckbox: true,
              showSearch: true,
              showMissing: false,
              multiSelect: false
            },
            componentType: "MULTILIST",
            facetType: "dynamic"
          },
          Manufacture_8: {
            enabled: true,
            customMessages: {
              loading: "Fetching Options",
              noResults: "No items Found"
            },
            rsConfig: {
              componentId: "Manufacture_8",
              filterLabel: null,
              title: "Manufacture",
              dataField: "Manufacture.keyword",
              size: 5,
              missingLabel: null,
              selectAllLabel: null,
              filterType: "list",
              queryFormat: "or",
              sortBy: "count",
              componentType: "MULTILIST",
              showCount: true,
              showCheckbox: true,
              showSearch: true,
              showMissing: false,
              multiSelect: false
            },
            componentType: "MULTILIST",
            facetType: "dynamic"
          },
          Chipset_9: {
            enabled: true,
            customMessages: {
              loading: "Fetching Options",
              noResults: "No items Found"
            },
            rsConfig: {
              componentId: "Chipset_9",
              filterLabel: null,
              title: "Chipset",
              dataField: "Attributes.Chipset.keyword",
              size: 5,
              missingLabel: null,
              selectAllLabel: null,
              filterType: "list",
              queryFormat: "and",
              sortBy: "count",
              componentType: "MULTILIST",
              showCount: true,
              showCheckbox: true,
              showSearch: true,
              showMissing: false,
              multiSelect: false
            },
            componentType: "MULTILIST",
            facetType: "dynamic"
          },
          Form_Factor_10: {
            enabled: true,
            customMessages: {
              loading: "Fetching Options",
              noResults: "No items Found"
            },
            rsConfig: {
              componentId: "Form_Factor_10",
              filterLabel: null,
              title: "Form Factor",
              dataField: "Attributes.FormFactor.keyword",
              size: 5,
              missingLabel: null,
              selectAllLabel: null,
              filterType: "list",
              queryFormat: "and",
              sortBy: "count",
              componentType: "MULTILIST",
              showCount: true,
              showCheckbox: true,
              showSearch: true,
              showMissing: false,
              multiSelect: false
            },
            componentType: "MULTILIST",
            facetType: "dynamic"
          },
          Laptop_Memory_11: {
            enabled: true,
            customMessages: {
              loading: "Fetching Options",
              noResults: "No items Found"
            },
            rsConfig: {
              componentId: "Laptop_Memory_11",
              filterLabel: null,
              title: "Laptop Memory",
              dataField: "Attributes.Memory.keyword",
              size: 5,
              missingLabel: null,
              selectAllLabel: null,
              filterType: "list",
              queryFormat: "and",
              sortBy: "count",
              componentType: "MULTILIST",
              showCount: true,
              showCheckbox: true,
              showSearch: true,
              showMissing: false,
              multiSelect: false
            },
            componentType: "MULTILIST",
            facetType: "dynamic"
          },
          CPU_Model_12: {
            enabled: true,
            customMessages: {
              loading: "Fetching Options",
              noResults: "No items Found"
            },
            rsConfig: {
              componentId: "CPU_Model_12",
              filterLabel: null,
              title: "CPU Model",
              dataField: "Attributes.CPUModel.keyword",
              size: 5,
              missingLabel: null,
              selectAllLabel: null,
              filterType: "list",
              queryFormat: "and",
              sortBy: "count",
              componentType: "MULTILIST",
              showCount: true,
              showCheckbox: true,
              showSearch: true,
              showMissing: false,
              multiSelect: false
            },
            componentType: "MULTILIST",
            facetType: "dynamic"
          },
          SSD_Capacity_13: {
            enabled: true,
            customMessages: {
              loading: "Fetching Options",
              noResults: "No items Found"
            },
            rsConfig: {
              componentId: "SSD_Capacity_13",
              filterLabel: null,
              title: "SSD Capacity",
              dataField: "Attributes.SSD.keyword",
              size: 5,
              missingLabel: null,
              selectAllLabel: null,
              filterType: "list",
              queryFormat: "and",
              sortBy: "count",
              componentType: "MULTILIST",
              showCount: true,
              showCheckbox: true,
              showSearch: true,
              showMissing: false,
              multiSelect: false
            },
            componentType: "MULTILIST",
            facetType: "dynamic"
          },
          HDD_Capacity_14: {
            enabled: true,
            customMessages: {
              loading: "Fetching Options",
              noResults: "No items Found"
            },
            rsConfig: {
              componentId: "HDD_Capacity_14",
              filterLabel: null,
              title: "HDD Capacity",
              dataField: "Attributes.HDD.keyword",
              size: 5,
              missingLabel: "",
              selectAllLabel: null,
              filterType: "list",
              queryFormat: "and",
              sortBy: "count",
              componentType: "MULTILIST",
              showCount: true,
              showCheckbox: true,
              showSearch: true,
              showMissing: false,
              multiSelect: false
            },
            componentType: "MULTILIST",
            facetType: "dynamic"
          },
          GPU_Memory_15: {
            enabled: true,
            customMessages: {
              loading: "Fetching Options",
              noResults: "No items Found"
            },
            rsConfig: {
              componentId: "GPU_Memory_15",
              filterLabel: null,
              title: "GPU Memory",
              dataField: "Attributes.GPUMemory.keyword",
              size: 5,
              missingLabel: null,
              selectAllLabel: null,
              filterType: "list",
              queryFormat: "and",
              sortBy: "count",
              componentType: "MULTILIST",
              showCount: true,
              showCheckbox: true,
              showSearch: true,
              showMissing: false,
              multiSelect: false
            },
            componentType: "MULTILIST",
            facetType: "dynamic"
          },
          GPU_Brand_16: {
            enabled: true,
            customMessages: {
              loading: "Fetching Options",
              noResults: "No items Found"
            },
            rsConfig: {
              componentId: "GPU_Brand_16",
              filterLabel: null,
              title: "GPU Brand",
              dataField: "Attributes.GPUManufacturer.keyword",
              size: 5,
              missingLabel: null,
              selectAllLabel: null,
              filterType: "list",
              queryFormat: "or",
              sortBy: "count",
              componentType: "MULTILIST",
              showCount: true,
              showCheckbox: true,
              showSearch: true,
              showMissing: false,
              multiSelect: false
            },
            componentType: "MULTILIST",
            facetType: "dynamic"
          }
        }
      }
    },
    fields: {
      description: "ShortDescription",
      handle: "Url",
      image: "ProductImage",
      price: "PriceIncVat",
      title: "Name"
    }
  },
  themeSettings: {
    type: "classic",
    customCss: "",
    rsConfig: {
      colors: {
        primaryColor: "#31c31f",
        primaryTextColor: "#fff",
        textColor: "#424242",
        titleColor: "#424242"
      },
      typography: {
        fontFamily: "default"
      }
    }
  },
  globalSettings: {
    currency: "ZAR",
    showSelectedFilters: true,
    meta: {
      branding: {
        logoUrl: "",
        logoWidth: 20,
        logoAlignment: "left"
      },
      deploySettings: {
        versionId: "dwi9wPVAlCDvAy5PhzkJyVRT64s2voxx"
      }
    }
  },
  exportSettings: {
    exportAs: "embed",
    credentials: "44febf5b8871:d7eafaa3-559f-4e74-88f1-477abd0b2d4e",
    openAsPage: false,
    type: "other"
  },
  resultSettings: {
    fields: {
      title: "Name",
      description: "ShortDescription",
      price: "PriceIncVat",
      priceUnit: "R",
      image: "ProductImage",
      handle: "Url"
    },
    customMessages: {
      resultStats: "[count] products found in [time] ms",
      noResults: "No Results Found!"
    },
    rsConfig: {
      pagination: false,
      infiniteScroll: true,
      componentType: "REACTIVELIST"
    },
    sortOptionSelector: [
      {
        dataField: "_score",
        label: "Sort By",
        sortBy: "desc"
      },
      {
        dataField: "PriceIncVat",
        label: "Low To High",
        sortBy: "asc"
      },
      {
        dataField: "PriceIncVat",
        label: "High To Low",
        sortBy: "desc"
      }
    ],
    resultHighlight: true,
    layout: "grid",
    viewSwitcher: true
  },
  searchSettings: {
    customMessages: {
      noResults: "No suggestions found for <mark>[term]</mark>"
    },
    searchButton: {
      icon: "",
      text: "Search for a product"
    },
    redirectUrlText: "View Product",
    redirectUrlIcon: "",
    fields: {
      title: "Name",
      description: "ShortDescription",
      price: "PriceIncVat",
      priceUnit: "R",
      image: "ProductImage",
      handle: "Url"
    },
    rsConfig: {
      autosuggest: false,
      showVoiceSearch: true,
      componentType: "SEARCHBOX"
    }
  },
  facetSettings: {
    dynamicFacets: [
      {
        enabled: true,
        customMessages: {
          loading: "Fetching Options",
          noResults: "No items Found"
        },
        rsConfig: {
          componentId: "Price_0",
          filterLabel: null,
          title: "Price",
          dataField: "PriceIncVat",
          missingLabel: null,
          selectAllLabel: null,
          filterType: "range",
          queryFormat: null,
          sortBy: "count",
          componentType: "DYNAMICRANGESLIDER",
          showCount: true,
          showCheckbox: true,
          showSearch: true,
          showMissing: false,
          multiSelect: false,
          showHistogram: false
        }
      },
      {
        enabled: true,
        customMessages: {
          loading: "Fetching Options",
          noResults: "No items Found"
        },
        rsConfig: {
          componentId: "Category_1",
          filterLabel: null,
          title: "Category",
          dataField: "Category1.keyword",
          size: 5,
          missingLabel: null,
          selectAllLabel: null,
          filterType: "list",
          queryFormat: "or",
          sortBy: "count",
          componentType: "MULTILIST",
          showCount: true,
          showCheckbox: true,
          showSearch: true,
          showMissing: false,
          multiSelect: false
        }
      },
      {
        enabled: true,
        customMessages: {
          loading: "Fetching Options",
          noResults: "No items Found"
        },
        rsConfig: {
          componentId: "Brand_2",
          filterLabel: null,
          title: "Brand",
          dataField: "Brand.keyword",
          size: 5,
          missingLabel: null,
          selectAllLabel: null,
          filterType: "list",
          queryFormat: "or",
          sortBy: "count",
          componentType: "MULTILIST",
          showCount: true,
          showCheckbox: true,
          showSearch: true,
          showMissing: false,
          multiSelect: false
        }
      },
      {
        enabled: true,
        customMessages: {
          loading: "Fetching Options",
          noResults: "No items Found"
        },
        rsConfig: {
          componentId: "CPU_3",
          filterLabel: null,
          title: "CPU",
          dataField: "Attributes.CPU.keyword",
          size: 5,
          missingLabel: null,
          selectAllLabel: null,
          filterType: "list",
          queryFormat: "or",
          sortBy: "asc",
          componentType: "MULTILIST",
          showCount: true,
          showCheckbox: true,
          showSearch: true,
          showMissing: false,
          multiSelect: false
        }
      },
      {
        enabled: true,
        customMessages: {
          loading: "Fetching Options",
          noResults: "No items Found"
        },
        rsConfig: {
          componentId: "GPU_Series_4",
          filterLabel: null,
          title: "GPU Series",
          dataField: "Attributes.GPUSeries.keyword",
          size: 5,
          missingLabel: null,
          selectAllLabel: null,
          filterType: "list",
          queryFormat: "or",
          sortBy: "count",
          componentType: "MULTILIST",
          showCount: true,
          showCheckbox: true,
          showSearch: true,
          showMissing: false,
          multiSelect: false
        }
      },
      {
        enabled: true,
        customMessages: {
          loading: "Fetching Options",
          noResults: "No items Found"
        },
        rsConfig: {
          componentId: "Screen_Size_5",
          filterLabel: null,
          title: "Screen Size",
          dataField: "Attributes.ScreenSize.keyword",
          size: 5,
          missingLabel: null,
          selectAllLabel: null,
          filterType: "list",
          queryFormat: "or",
          sortBy: "count",
          componentType: "MULTILIST",
          showCount: true,
          showCheckbox: true,
          showSearch: true,
          showMissing: false,
          multiSelect: false
        }
      },
      {
        enabled: true,
        customMessages: {
          loading: "Fetching Options",
          noResults: "No items Found"
        },
        rsConfig: {
          componentId: "Memory_6",
          filterLabel: null,
          title: "Memory",
          dataField: "Attributes.MemorySize.keyword",
          size: 5,
          missingLabel: null,
          selectAllLabel: null,
          filterType: "list",
          queryFormat: "or",
          sortBy: "count",
          componentType: "MULTILIST",
          showCount: true,
          showCheckbox: true,
          showSearch: true,
          showMissing: false,
          multiSelect: false
        }
      },
      {
        enabled: true,
        customMessages: {
          loading: "Fetching Options",
          noResults: "No items Found"
        },
        rsConfig: {
          componentId: "Warranty_Info_7",
          filterLabel: null,
          title: "Warranty Info",
          dataField: "WarrantyInfo.keyword",
          size: 5,
          missingLabel: null,
          selectAllLabel: null,
          filterType: "list",
          queryFormat: "or",
          sortBy: "count",
          componentType: "MULTILIST",
          showCount: true,
          showCheckbox: true,
          showSearch: true,
          showMissing: false,
          multiSelect: false
        }
      },
      {
        enabled: true,
        customMessages: {
          loading: "Fetching Options",
          noResults: "No items Found"
        },
        rsConfig: {
          componentId: "Manufacture_8",
          filterLabel: null,
          title: "Manufacture",
          dataField: "Manufacture.keyword",
          size: 5,
          missingLabel: null,
          selectAllLabel: null,
          filterType: "list",
          queryFormat: "or",
          sortBy: "count",
          componentType: "MULTILIST",
          showCount: true,
          showCheckbox: true,
          showSearch: true,
          showMissing: false,
          multiSelect: false
        }
      },
      {
        enabled: true,
        customMessages: {
          loading: "Fetching Options",
          noResults: "No items Found"
        },
        rsConfig: {
          componentId: "Chipset_9",
          filterLabel: null,
          title: "Chipset",
          dataField: "Attributes.Chipset.keyword",
          size: 5,
          missingLabel: null,
          selectAllLabel: null,
          filterType: "list",
          queryFormat: "or",
          sortBy: "count",
          componentType: "MULTILIST",
          showCount: true,
          showCheckbox: true,
          showSearch: true,
          showMissing: false,
          multiSelect: false
        }
      },
      {
        enabled: true,
        customMessages: {
          loading: "Fetching Options",
          noResults: "No items Found"
        },
        rsConfig: {
          componentId: "Form_Factor_10",
          filterLabel: null,
          title: "Form Factor",
          dataField: "Attributes.FormFactor.keyword",
          size: 5,
          missingLabel: null,
          selectAllLabel: null,
          filterType: "list",
          queryFormat: "or",
          sortBy: "count",
          componentType: "MULTILIST",
          showCount: true,
          showCheckbox: true,
          showSearch: true,
          showMissing: false,
          multiSelect: false
        }
      },
      {
        enabled: true,
        customMessages: {
          loading: "Fetching Options",
          noResults: "No items Found"
        },
        rsConfig: {
          componentId: "Laptop_Memory_11",
          filterLabel: null,
          title: "Laptop Memory",
          dataField: "Attributes.Memory.keyword",
          size: 5,
          missingLabel: null,
          selectAllLabel: null,
          filterType: "list",
          queryFormat: "or",
          sortBy: "count",
          componentType: "MULTILIST",
          showCount: true,
          showCheckbox: true,
          showSearch: true,
          showMissing: false,
          multiSelect: false
        }
      },
      {
        enabled: true,
        customMessages: {
          loading: "Fetching Options",
          noResults: "No items Found"
        },
        rsConfig: {
          componentId: "CPU_Model_12",
          filterLabel: null,
          title: "CPU Model",
          dataField: "Attributes.CPUModel.keyword",
          size: 5,
          missingLabel: null,
          selectAllLabel: null,
          filterType: "list",
          queryFormat: "or",
          sortBy: "count",
          componentType: "MULTILIST",
          showCount: true,
          showCheckbox: true,
          showSearch: true,
          showMissing: false,
          multiSelect: false
        }
      },
      {
        enabled: true,
        customMessages: {
          loading: "Fetching Options",
          noResults: "No items Found"
        },
        rsConfig: {
          componentId: "SSD_Capacity_13",
          filterLabel: null,
          title: "SSD Capacity",
          dataField: "Attributes.SSD.keyword",
          size: 5,
          missingLabel: null,
          selectAllLabel: null,
          filterType: "list",
          queryFormat: "or",
          sortBy: "count",
          componentType: "MULTILIST",
          showCount: true,
          showCheckbox: true,
          showSearch: true,
          showMissing: false,
          multiSelect: false
        }
      },
      {
        enabled: true,
        customMessages: {
          loading: "Fetching Options",
          noResults: "No items Found"
        },
        rsConfig: {
          componentId: "HDD_Capacity_14",
          filterLabel: null,
          title: "HDD Capacity",
          dataField: "Attributes.HDD.keyword",
          size: 5,
          missingLabel: "",
          selectAllLabel: null,
          filterType: "list",
          queryFormat: "or",
          sortBy: "count",
          componentType: "MULTILIST",
          showCount: true,
          showCheckbox: true,
          showSearch: true,
          showMissing: false,
          multiSelect: false
        }
      },
      {
        enabled: true,
        customMessages: {
          loading: "Fetching Options",
          noResults: "No items Found"
        },
        rsConfig: {
          componentId: "GPU_Memory_15",
          filterLabel: null,
          title: "GPU Memory",
          dataField: "Attributes.GPUMemory.keyword",
          size: 5,
          missingLabel: null,
          selectAllLabel: null,
          filterType: "list",
          queryFormat: "or",
          sortBy: "count",
          componentType: "MULTILIST",
          showCount: true,
          showCheckbox: true,
          showSearch: true,
          showMissing: false,
          multiSelect: false
        }
      },
      {
        enabled: true,
        customMessages: {
          loading: "Fetching Options",
          noResults: "No items Found"
        },
        rsConfig: {
          componentId: "GPU_Brand_16",
          filterLabel: null,
          title: "GPU Brand",
          dataField: "Attributes.GPUManufacturer.keyword",
          size: 5,
          missingLabel: null,
          selectAllLabel: null,
          filterType: "list",
          queryFormat: "or",
          sortBy: "count",
          componentType: "MULTILIST",
          showCount: true,
          showCheckbox: true,
          showSearch: true,
          showMissing: false,
          multiSelect: false
        }
      }
    ]
  },
  chartSettings: {
    charts: []
  },
  syncSettings: null,
  authenticationSettings: {
    enableAuth0: null,
    enableProfilePage: null,
    profileSettingsForm: {
      viewData: null,
      editData: null,
      closeAccount: null,
      editThemeSettings: null,
      editSearchPreferences: null
    },
    clientId: "mZLIFUlQedQJlZO21LiUauZwSMhiteGd"
  },
  appbaseSettings: {
    index: "eve_products",
    credentials: "44febf5b8871:d7eafaa3-559f-4e74-88f1-477abd0b2d4e",
    url: "https://flaky-banana-vkgtijv-arc.searchbase.io"
  }
};
export default JSON.stringify(appbasePrefs);
