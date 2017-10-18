'use strict';

var luxcore = module.exports;

// module information
luxcore.version = 'v' + require('./package.json').version;
luxcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of luxcore-lib found. ' +
      'Please make sure to require luxcore-lib and check that submodules do' +
      ' not also include their own luxcore-lib dependency.';
    throw new Error(message);
  }
};
luxcore.versionGuard(global._luxcore);
global._luxcore = luxcore.version;

// crypto
luxcore.crypto = {};
luxcore.crypto.BN = require('./lib/crypto/bn');
luxcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
luxcore.crypto.Hash = require('./lib/crypto/hash');
luxcore.crypto.Random = require('./lib/crypto/random');
luxcore.crypto.Point = require('./lib/crypto/point');
luxcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
luxcore.encoding = {};
luxcore.encoding.Base58 = require('./lib/encoding/base58');
luxcore.encoding.Base58Check = require('./lib/encoding/base58check');
luxcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
luxcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
luxcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
luxcore.util = {};
luxcore.util.buffer = require('./lib/util/buffer');
luxcore.util.js = require('./lib/util/js');
luxcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
luxcore.errors = require('./lib/errors');

// main bitcoin library
luxcore.Address = require('./lib/address');
luxcore.Block = require('./lib/block');
luxcore.MerkleBlock = require('./lib/block/merkleblock');
luxcore.BlockHeader = require('./lib/block/blockheader');
luxcore.HDPrivateKey = require('./lib/hdprivatekey.js');
luxcore.HDPublicKey = require('./lib/hdpublickey.js');
luxcore.Networks = require('./lib/networks');
luxcore.Opcode = require('./lib/opcode');
luxcore.PrivateKey = require('./lib/privatekey');
luxcore.PublicKey = require('./lib/publickey');
luxcore.Script = require('./lib/script');
luxcore.Transaction = require('./lib/transaction');
luxcore.URI = require('./lib/uri');
luxcore.Unit = require('./lib/unit');

// dependencies, subject to change
luxcore.deps = {};
luxcore.deps.bnjs = require('bn.js');
luxcore.deps.bs58 = require('bs58');
luxcore.deps.Buffer = Buffer;
luxcore.deps.elliptic = require('elliptic');
luxcore.deps.scryptsy = require('scryptsy');
luxcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
luxcore.Transaction.sighash = require('./lib/transaction/sighash');
