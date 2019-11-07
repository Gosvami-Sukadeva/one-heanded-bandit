class Result {
    static moneyWinInGame(result, bid) {
        if (result) return 3 * bid;
        else return 0;
    }
}

Result.moneyWinInGame(true, 12)