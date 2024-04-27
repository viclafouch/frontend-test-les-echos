# Technical test by Viclafouch for Les Echos

* Starts at 10:39am
* Ends at 13:12am

Duration: 2h33

## Feedbacks (FR)

* Assez cool, pas de blocage en soit. Peut-être le fait de fetch sur ses API routes via un RSC, il faut spécifier le hostname et son origin. Je l'ai mis en dur dans la codebase, mais je ne vois pas dans quelle mesure il faudrait fetch son API route coté serveur. Là c'est pour l'exercice on va dire ;

* PandaCSS pourquoi pas, ma meilleure librarie de CSS, mais je n'ai pas voulu perdre de temps sur son installation. J'ai assuré la rapidité ici, avec NextUI ;

* Session du user avec un simple Contexte. Dans l'idée, j'aurai fais coté serveur avec NextAuth. Non persistant aussi d'ailleurs ;

* GroupBy avec [Remeda](https://remedajs.com/) (car Array.groupBy pas encore encore bien supporté) ;