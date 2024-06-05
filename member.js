function skillsMember() {
    var member = {
        name: 'John',
        age: 30
    };
    this.getMember = function(){
        return member;
    };
    this.setMember = function(name, age){
        member.name = name;
        member.age = age;
    };
}