const assert = require('assert');
const Person = require('../main/practice-3/person');

describe("Person", () => {
    it("should have field name and age", () => {

        let person = new Person("Tom", 21);
        assert.equal(person.name, "Tom");
        assert.equal(person.age, 21);
    });

    it("should have a method introduce, introduce person with name and age", () => {
        let person = new Person("Tom", 21);

        let introduce = person.introduce();

        assert.equal(introduce, "My name is Tom. I am 21 years old.");


    });
});