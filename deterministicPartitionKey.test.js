const { deterministicPartitionKey } = require("./deterministicPartitionKey");

describe("Deterministic Partition Key Tests", () => {
    it("Returns TRIVIAL_PARTITION_KEY when no input is provided", () => {
        const output = deterministicPartitionKey();
        expect(output).toBe("0");
    });

    it("Returns hashed value when input is > 256 in length", () => {
        const event = {
            partitionKey : "abcdabcdabcdabcdbandsmnansanmsamdnmandjvnsddklsfnsflabcdabcdabcdabcdbandsmnansanmsamdnmandjvnsddklsfnsflabcdabcdabcdabcdbandsmnansanmsamdnmandjvnsddklsfnsflabcdabcdabcdabcdbandsmnansanmsamdnmandjvnsddklsfnsflabcdabcdabcdabcdbandsmnansanmsamdnmandjvnsddklsfnsflabcdabcdabcdabcdbandsmnansanmsamdnmandjvnsddklsfnsflabcdabcdabcdabcdbandsmnansanmsamdnmandjvnsddklsfnsflabcdabcdabcdabcdbandsmnansanmsamdnmandjvnsddklsfnsflabcdabcdabcdabcdbandsmnansanmsamdnmandjvnsddklsfnsflabcdabcdabcdabcdbandsmnansanmsamdnmandjvnsddklsfnsflabcdabcdabcdabcdbandsmnansanmsamdnmandjvnsddklsfnsflabcdabcdabcdabcdbandsmnansanmsamdnmandjvnsddklsfnsflabcdabcdabcdabcdbandsmnansanmsamdnmandjvnsddklsfnsflabcdabcdabcdabcdbandsmnansanmsamdnmandjvnsddklsfnsflabcdabcdabcdabcdbandsmnansanmsamdnmandjvnsddklsfnsflabcdabcdabcdabcdbandsmnansanmsamdnmandjvnsddklsfnsflabcdabcdabcdabcdbandsmnansanmsamdnmandjvnsddklsfnsflabcdabcdabcdabcdbandsmnansanmsamdnmandjvnsddklsfnsflabcdabcdabcdabcdbandsmnansanmsamdnmandjvnsddklsfnsflabcdabcdabcdabcdbandsmnansanmsamdnmandjvnsddklsfnsflabcdabcdabcdabcdbandsmnansanmsamdnmandjvnsddklsfnsflabcdabcdabcdabcdbandsmnansanmsamdnmandjvnsddklsfnsflabcdabcdabcdabcdbandsmnansanmsamdnmandjvnsddklsfnsflabcdabcdabcdabcdbandsmnansanmsamdnmandjvnsddklsfnsflabcdabcdabcdabcdbandsmnansanmsamdnmandjvnsddklsfnsflabcdabcdabcdabcdbandsmnansanmsamdnmandjvnsddklsfnsflabcdabcdabcdabcdbandsmnansanmsamdnmandjvnsddklsfnsfl"
        };
        const output = deterministicPartitionKey(event);
        expect(output.length).toBe(128);
    });

    it("Returns same partition Key when the length of the key is < 256", () => {
        const event = {
            partitionKey: "Clipbox"
        };
        const output = deterministicPartitionKey(event);
        expect(output).toBe("Clipbox");
    })
})