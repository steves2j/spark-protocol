'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var SPARK_SERVER_EVENTS = {
  CALL_DEVICE_FUNCTION: 'spark-server/call_device_function',
  FLASH_DEVICE: 'spark-server/flash_device',
  FLASH_PRODUCT_FIRMWARE: 'spark-server/flash_product_firmware',
  GET_DEVICE_ATTRIBUTES: 'spark-server/get_attributes',
  GET_DEVICE_VARIABLE_VALUE: 'spark-server/get_device_variable_value',
  PING_DEVICE: 'spark-server/ping_device',
  RAISE_YOUR_HAND: 'spark-server/raise_your_hand',
  UPDATE_DEVICE_ATTRIBUTES: 'spark-server/update_device_attributes'
};

exports.default = SPARK_SERVER_EVENTS;