Front-End-React WALLET

This is a personalized wallet.

1) homePage-Alert - no money (if the amount on your account is 0 or less you will get this alert) Go to Add Money to your account, add some money and Alert will be gone.-6 categories, category Expenses has sub-categories
-at the bottom of app no matter where you are will be displayed your current money in wallet (if you are adding money to your account your value will go up, if you will be spending it your amount will go down)

2) add Money to your account
-you type amount and type, and automatically get time-stamp
-after clicking add money you will be redirected to homePage, but you will also start a flow of your transactions on AddMoney page. So if you visit addMoney again you will see your history
-at the bottom of addMoney you will see all the money added so far-once you have flow you will also get the Delete button. If you choose to delete your addMoney-input it will change the value of All Money Added so far on this page as well as Money In Wallet(which renders through all pages)

3) Money in Wallet is a Link to home page

4) Food (same goes for FuckIt and Tobaco)(same goes for Other and Vacation only difference is that those two values have another property of Name in flow)
-you type amount, and automatically get time-stamp
-after clicking enter you will be redirected to homePage, but you will also start a flow of your transactions on Food page. So if you visit Food again you will see your history
-at the bottom of Food you will see all the money added so far
-once you have flow you will also get the Delete button. If you choose to delete your Food-input it will change the value of My Hrana so far on this page as well as Money In Wallet(which renders through all pages)

5) Expenses
-once you click Expenses you get 9 sub-categories
-at the bottom of that page you will get All expenses so far
-so each sub-category influences its own state, state of All expenses and Money in wallet
-when you enter one sub-category(it goes the same for all)-
--you type amount, and automatically get time-stamp-
--after clicking enter you will be redirected to Expenses, but you will also start a flow of your transactions on your sub-category page. So if you visit that sub-category again you will see your history
--at the bottom of sub-category you will see all the money added so far
--once you have flow you will also get the Delete button. If you choose to delete your sub-category-input it will change the value of that sub-category as well as All Expenses so far as well as Money In Wallet(which renders through all pages)

6) Clicking delete button will leave you on the same page



About this project + what to change.

I wanted to practice my knowledge of using functional components. I was using useState and useEffect.I started with slo language and than changed to eng so some components still have slo names (hrana = food, zajeb = fuckIt)I was practicing my knowledge of targeting inputs. I am using changes in flow properties to influence my states. I realized that in the middle of my project so the code is not the cleanest.
