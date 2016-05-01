"use strict";
var texts = function () {
    this.tipbotTxt = {
        // HELPTEXT   
        "helpText": "*DashBot commands* \n" +
        " - *balance*\t\task the bot for your current balance\n" +
        "\t\t\t\t\t\t_@DashBot what is my balance_ \n" +
        "\n" +
        " - *send*\t\t\t\ttell the bot to send coins to someone; _@DashBot send 0.1 DASH to @someone_ \n" +
        " _aliases: give, tip_  works also with major fiat currencies (use *currencies* command to see the list); " +
        "\t\t\t\t\t\t\t\t_@DashBot give 4 USD to @someone_ \n" +
        //       "\t\t\t\t\t\t\t  \n" +
        "\n" +
        " - *deposit*\t\task the bot for a deposit address; _@DashBot let me deposit!_ \n" +
        "\n" +
        " - *withdraw*\ttell the bot to withdraw to a address; \n" +
        "\t\t\t\t\t\t_@DashBot withdraw 1 DASH to 1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp!_ \n" +
        "\n",

        "helpTextDemand": " - *receive*\t\ttell the bot to request coins from to someone; _@DashBot receive 0.1 DASH from @someone_ \n" +
        " _aliases: demand, ask, deserve, get, give me, owes me_ \n" +
        "\n",

        "helpTextCurrencies": " - *currencies*\task the bot for a list of supported currencies; _@DashBot what currencies do you know?_ \n" +
        "\n" +
        " - *price*\t\t\task the bot for the Dash price in a particular currency. Price info from coinmarketcap.\n " +
        "\t\t\t\t\t\t_@DashBot price in USD!_ \n" +
        "\n" +
        " - *priceticker*\t\t\tshows all the know prices. Use * priceticker short* for a limited list.  \n" +
        "\n"+
        " - *convert*\t\task the bot to convert between a particular currency and Dash (or visa versa);  \n" +
        "\t\t\t\t\t\t_@DashBot 0.03 DASH to GBP_ \t or \t _@DashBot 15 EURO to DASH_\n",
        // ALL BALANCES
        "RetrievingAllBalancesDisabled": "Retrieving all balances is disabled!",
        "RetrievingAllBalancesAdminOnly": "Only admins can list all balances!",
        "RetrievingAllBalancesWait": "Retrieving all balances... might take a while depending on the amount of users!",
        // GENERAL
        "NoAmountFound": " couldn't find the amount. Did you forget the decimal ?",
        "NoValidAddress": " that's not a valid address!",
        "MoreThen1Address": " I can't do a withdraw to more than 1 address",
        "NoAddress": " I need to know an address to withdraw to.",
        "NoAmountOrCurrency": " I need to know much you want to withdraw and the currency.",
        "UnsupportedCurrency": ": we don't support that currency yet!",
        "InvalidAmount": ": that's an invalid amount",
        // WITHDRAW
        "WithdrawQuestion": "",
        // SEND
        "NoUserFound1": "Hello there ",
        "NoUserFound": ", I didn't catch the user you want to tip. You surely didn't want to tip yourself, did you ?",
        // REQUEST
        "RequestingDisabled": "Requesting coins is disabled!",
        // MENTIONS MULTIPLE USERS
        "ToMuchUsers": " but you're mentioning too many people!",
        // CONVERT
        "NotEnoughCurrencies": ": not enough currencies!",
        "ToMuchCurrencies": ": too many currencies!",
        // PRICE
        "PriceBase": "1.0 Dash is ",
        "PriceInfoFrom": " (price of coinmarketcap)",
        // CURRENCIES
        "CurrenciesTitle": "Price info from coinmarketcap \n",
        "SupportedCurrenciesFull": "Supported currencies: ",
        "SupportedSymbols": "use these currency abbreviations/symbols in your message: *",
        "SupportedBase": "And does it need saying: *DASH* is supported !",
        // RAIN
        "RainAdminOnly" : "Only Admins can make it rain because there the Rain Gods.",
        // OOPS
        "Oops": " but I did not understand that.\nUse the *help* command to see the valid options."
    };

    this.userTxt = {
        // GET BALANCES
        "BaseCurrency": "Dash",
        "BalanceIs": " your tip jar contains: ",
        "UnconfirmedBalance_1": "you have an unconfirmed balance (less than ",
        "UnconfirmedBalance_2": " confirmations) of ",
        "BalanceWarningHigh": "Your tip jar is filling up. Please consider withdrawing some Dash.",
        // WITHDRAW
        "Withdrawal_1": "Withdrawal of ",
        "WithdrawalTransaction": " transaction: ",
        "InsufficientBalance": " insufficient balance.",
        // SEND
        "SendPublicMessage_1": ":clap: ",
        "SendPublicMessage_2": " tipped ",
        "SendPrivateMssSendingUser": " you're a great Dash Chat user :thumbsup: \nLets see how much there is left in your tip jar now: \n",
        "SendPrivateMssRecievingUser_1" : "Hi there " , 
        "SendPrivateMssRecievingUser_2" : ", you just received ",
        "SendPrivateMssRecievingUser_3" : " from ",
         "SendOops_1" : "Oops could not tip ",
         "SendOops_2" : " to "

    };

};

module.exports = texts;
