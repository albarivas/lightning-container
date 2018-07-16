({
    handleMessage: function (component, event, helper) {

        var payload = event.getParams().payload;
        var name = payload.name;
        if (name === "move") {
            var value = payload.value;
            var moves = component.get('v.moves');
            moves.push(JSON.stringify(value));
            component.set('v.moves', moves);
        }
    },

    handleResetGame: function (component, event, helper) {
        var msg = {
            name: "action",
            value: "reset-game"
        };

        component.find("reactApp").message(msg);
        component.set('v.moves', []);
    }
})