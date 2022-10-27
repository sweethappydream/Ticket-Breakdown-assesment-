const crypto = require("crypto");

/*
    Accepts String key
    Returns String hash
*/
const createHash = (key) => {
    return crypto.createHash("sha3-512").update(key).digest("hex");
}

/*
    Method accepts an event object
    Returns partitionKey
*/
exports.deterministicPartitionKey = (event) => {
    const MAX_PARTITION_KEY_LENGTH = 256;
    let partitionKey = "0";
    if(typeof event == "object" && event) {
        if(event.partitionKey) {
            const eventPartitionKey = event.partitionKey;
            partitionKey = eventPartitionKey.length > MAX_PARTITION_KEY_LENGTH ? createHash(eventPartitionKey) : eventPartitionKey;
        } else {
            const stringifiedEvent = JSON.stringify(event);
            partitionKey = createHash(stringifiedEvent)
        }
    }
    return partitionKey;
}