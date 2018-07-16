global class TestReactContainerController {

    @RemoteAction
    global static Decimal setWinner(String winner) {
        Player__c player = [Select Points__c from Player__c where Name = :winner LIMIT 1];
        player.Points__c += 1;
        update player;
        
        return player.Points__c;
    }
}