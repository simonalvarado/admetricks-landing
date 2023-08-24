module.exports = {
    moduleFileExtensions: [
      'vue',
      'js'
    ],
  
    moduleNameMapper: {
      '^~/(.*)$': '<rootDir>/src/$1',
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/assetsTransformer.js', '\\.(css|less)$': '<rootDir>/assetsTransformer.js',
      '^d3$': '<rootDir>/node_modules/d3/dist/d3.min.js'
    },
  
    modulePathIgnorePatterns: [
      '<rootDir>/node_modules',
      '<rootDir>/dist'
    ],
  
    testURL: 'http://localhost',
  
    transform: {
      '^.+\\.vue$' : 'vue-jest',
      '^.+\\.jsx?$' : 'babel-jest'
    },

    transformIgnorePatterns: [
        '<rootDir>/node_modules/(?!axios)'
    ]
  }