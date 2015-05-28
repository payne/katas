const SKILL_LEVEL = {
  TBD: 'TBD', 
  BEGINNER: 'BEGINNER', 
  INTERMEDIATE: 'INTERMEDIATE', 
  ADVANCED: 'ADVANCED', 
  EXPERT: 'EXPERT'
};

const TEMPLATE_STRING_BASICS = 1;
const TEMPLATE_STRING_MULTILINE = 2;
const TEMPLATE_STRING_TAGGED = 3;
const TEMPLATE_STRING_RAW = 4;
const ARROW_FUNCTION_BASICS = 5;
const ARROW_FUNCTION_BINDING = 6;
const LET = 7;
const CONST = 8;
const OBJECT_LITERAL_BASICS = 9;
const DESTRUCTURING_ARRAY = 10;

const DESTRUCTURING_STRING = 11;
const DESTRUCTURING_OBJECT = 12;
const OBJECT_LITERAL_COMPUTED_PROPERTIES = 16;
const ITERATOR_PROTOCOL = 39;

const ARRAY_FROM = 29;
const SYMBOL_BASICS = 34;
const SPREAD_WITH_ARRAYS = 20;

const ARRAY_ENTRIES = 41;
const ARRAY_KEYS = 42;
const ARRAY_VALUES = 43;
const MAP_BASICS = 44;
const MAP_GET = 45;
const MAP_SET = 46;
const SET_BASICS = 47;

const SPREAD_WITH_STRINGS = 21;
export const all = {
  name: 'ES6 Katas',
  groups: {
    'Template strings': {
      items: {
        [TEMPLATE_STRING_BASICS]: {
          name: 'Basics',
          description: '',
          path: 'template-strings/basics',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        [TEMPLATE_STRING_MULTILINE]: {
          path: 'template-strings/multiline',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        [TEMPLATE_STRING_TAGGED]: {
          path: 'template-strings/tagged',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        [TEMPLATE_STRING_RAW]: {
          path: 'template-strings/raw',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        }
      }
    },
    'Arrow functions': {
      items: {
        [ARROW_FUNCTION_BASICS]: {
          path: 'arrow-functions/basics',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        [ARROW_FUNCTION_BINDING]: {
          path: 'arrow-functions/binding',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        }
      }
    },
    'Block scope': {
      items: {
        [LET]: {
          path: 'block-scope/let',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        [CONST]: {
          path: 'block-scope/const',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        }
      }
    },
    'Object literal': {
      items: {
        [OBJECT_LITERAL_BASICS]: {
          path: 'object-literal/basics',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [ARROW_FUNCTION_BASICS, CONST]
        },
        [OBJECT_LITERAL_COMPUTED_PROPERTIES]: {
          path: 'object-literal/computed-properties',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        }
      }
    },
    'Destructuring': {
      items: {
        [DESTRUCTURING_ARRAY]: {
          path: 'destructuring/array',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        [DESTRUCTURING_STRING]: {
          path: 'destructuring/string',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        [DESTRUCTURING_OBJECT]: {
          path: 'destructuring/object',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        13: {
          path: 'destructuring/defaults',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        14: {
          path: 'destructuring/parameters',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        15: {
          path: 'destructuring/rename',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
      }
    },
    'Unicode': {
      items: {
        17: {
          path: 'unicode/in-strings',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
      }
    },
    'Rest operator': {
      items: {
        18: {
          path: 'rest/as-parameter',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        19: {
          path: 'rest/with-destructuring',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
      }
    },
    'Spread operator': {
      items: {
        [SPREAD_WITH_ARRAYS]: {
          path: 'spread/with-arrays',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        [SPREAD_WITH_STRINGS]: {
          path: 'spread/with-strings',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
      }
    },
    'Class': {
      items: {
        22: {
          path: 'class/creation',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        23: {
          path: 'class/accessors',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        24: {
          path: 'class/static-keyword',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        25: {
          path: 'class/extends',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        26: {
          path: 'class/more-extends',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        27: {
          path: 'class/super-in-method',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        28: {
          path: 'class/super-in-constructor',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
      }
    },
    'Array API': {
      items: {
        [ARRAY_FROM]: {
          path: 'array-api/from',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        30: {
          path: 'array-api/of',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        31: {
          path: 'array-api/fill',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        32: {
          path: 'array-api/find',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        33: {
          path: 'array-api/findIndex',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        [ARRAY_ENTRIES]: {
          path: 'array-api/entries',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [CONST, ARRAY_FROM, ITERATOR_PROTOCOL]
        },
        [ARRAY_KEYS]: {
          path: 'array-api/keys',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [CONST, DESTRUCTURING_ARRAY, ARRAY_FROM, ITERATOR_PROTOCOL]
        },
        [ARRAY_VALUES]: {
          path: 'array-api/values',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [CONST, DESTRUCTURING_ARRAY, ITERATOR_PROTOCOL]
        }
      }
    },
    'Symbol': {
      items: {
        [SYMBOL_BASICS]: {
          path: 'symbol/basics',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: []
        },
        35: {
          path: 'symbol/for',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: []
        },
        36: {
          path: 'symbol/keyFor',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [35]
        },
      }
    },
    'Iterator': {
      items: {
        37: {
          path: 'iterator/array',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        38: {
          path: 'iterator/string',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [37]
        },
        [ITERATOR_PROTOCOL]: {
          path: 'iterator/protocol',
          level: SKILL_LEVEL.EXPERT,
          requiresKnowledgeFrom: []
        },
        40: {
          path: 'iterator/usages',
          level: SKILL_LEVEL.EXPERT,
          requiresKnowledgeFrom: [LET, DESTRUCTURING_ARRAY, DESTRUCTURING_OBJECT, SYMBOL_BASICS, ITERATOR_PROTOCOL, SPREAD_WITH_ARRAYS]
        },
      }
    },
    'Map': {
      items: {
        [MAP_BASICS]: {
          path: 'map/basics',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        [MAP_GET]: {
          path: 'map/get',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [37]
        },
        [MAP_SET]: {
          path: 'map/set',
          level: SKILL_LEVEL.EXPERT,
          requiresKnowledgeFrom: []
        },
      }
    },
    'Set': {
      items: {
        [SET_BASICS]: {
          path: 'set/basics',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
      }
    },
  }
};
