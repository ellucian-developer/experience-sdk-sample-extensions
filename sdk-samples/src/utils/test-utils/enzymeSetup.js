var enzyme = require('enzyme');
var Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

// polyfill window.crypto for testing nanoid
var nodeCrypto = require('crypto');

// mocks the standard browser crypto function in the global environment; this is necessary for
// running SDK unit tests, as the Path component library depends on the presence of crypto
global.crypto = {
    // eslint-disable-next-line no-sync
    getRandomValues: function(buffer) { return nodeCrypto.randomFillSync(buffer);}
};

enzyme.configure({ adapter: new Adapter() });