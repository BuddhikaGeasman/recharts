import { StorybookArg, StorybookArgs } from '../../../StorybookArgs';

export const legendType: StorybookArg = {
  description: "The type of icon in legend. If set to 'none', no legend item will be rendered.",
  table: {
    type: {
      summary:
        "'line' | 'plainline' | 'square' | 'rect'| 'circle' | 'cross' | 'diamond'" +
        " | 'square' | 'star' | 'triangle' | 'wye' | 'none'",
    },
    defaultValue: 'line',
    category: 'Style',
  },
};

// Caveat: If any prop is added here, it would falsely be add to the documentation of the component
// where this group is used. If the group is to be extended, then only single props should be imported
// by each component that does not use all of them.
export const LegendProps: StorybookArgs = {
  width: {
    description: 'The width of legend.',
    table: {
      type: {
        summary: 'Number',
      },
      category: 'General',
    },
  },
  height: {
    description: 'The height of legend.',
    table: {
      type: {
        summary: 'Number',
      },
      category: 'General',
    },
  },
  layout: {
    description: 'The layout of legend items.',
    defaultValue: 'horizontal',
    table: {
      type: {
        summary: 'horizontal | vertical',
      },
      category: 'General',
    },
  },
  align: {
    description: 'The alignment of legend items in `horizontal` direction',
    table: {
      type: {
        summary: 'left | center | right',
      },
      category: 'General',
    },
  },
  verticalAlign: {
    description: 'The alignment of legend items in `vertical` direction',
    table: {
      type: {
        summary: 'top | middle | bottom',
      },
      category: 'General',
    },
  },
  iconSize: {
    description: 'The size of icon in each legend item.',
    defaultValue: 14,
    table: {
      type: {
        summary: 'Number',
      },
      category: 'General',
    },
  },
  iconType: {
    description: 'The type of icon in each legend item.',
    defaultValue: 14,
    table: {
      type: {
        summary: 'line | plainline | square | rect | circle | cross | diamond | star | triangle | wye',
      },
      category: 'General',
    },
  },
  payload: {
    description: 'The source data of the content to be displayed in the legend, usually calculated internally.',
    defaultValue: [],
    table: {
      type: {
        summary: 'Array',
        detail: `[{ value: 'item name', type: 'line', id: 'ID01' }]`,
      },
      category: 'General',
    },
  },
  chartWidth: {
    description: 'The width of chart container, usually calculated internally.',
    table: {
      type: {
        summary: 'Number',
      },
      category: 'General',
    },
  },
  chartHeight: {
    description: 'The height of chart container, usually calculated internally.',
    table: {
      type: {
        summary: 'Number',
      },
      category: 'General',
    },
  },
  margin: {
    description: 'The margin of chart container, usually calculated internally.',
    table: {
      type: {
        summary: 'Object',
        detail: `{ top: 0, left: 0, right: 0, bottom: 0 }`,
      },
      category: 'General',
    },
  },
  content: {
    description: `If set to a React element, the option will be used to render the legend.
    If set to a function, the function will be called to render the legend's content.`,
    table: {
      type: {
        summary: 'ReactElement | Function',
        detail: `<Legend content={<CustomizedLegend external={external} />} />

        const renderLegend = (props) => {
          const { payload } = props;
        
          return (
            <ul>
              {
                payload.map((entry, index) => (
                  <li key={'item'-index}>{entry.value}</li>
                ))
              }
            </ul>
          );
        }
        <Legend content={renderLegend} />`,
      },
      category: 'General',
    },
  },
  formatter: {
    description: 'The formatter function of each text in legend.',
    table: {
      type: {
        summary: 'Function',
        detail: '(value, entry, index) => ()',
      },
      category: 'General',
    },
  },
  wrapperStyle: {
    description: `The style of legend container which is a "position: absolute;" div element. 
    Because the position of legend is quite flexible, so you can change the position by the value of top, left, right, bottom in this option.
    And the format of wrapperStyle is the same as React inline style.`,
    table: {
      type: {
        summary: 'Object',
      },
      category: 'General',
    },
  },
  onClick: {
    description: 'The customized event handler of click on the items in this group',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseDown: {
    description: 'The customized event handler of mousedown on the items in this group',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseUp: {
    description: 'The customized event handler of mouseup on the items in this group',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseMove: {
    description: 'The customized event handler of mousemove on the items in this group',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseOver: {
    description: 'The customized event handler of mouseover on the items in this group',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseOut: {
    description: 'The customized event handler of mouseout on the items in this group',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseEnter: {
    description: 'The customized event handler of moustenter on the items in this group',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseLeave: {
    description: 'The customized event handler of mouseleave on the items in this group',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
};
