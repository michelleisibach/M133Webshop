# M133Webshop

## Installation

1. Installieren Sie als erstes node.js auf ihrem lokalen Rechner. Dazu gehen Sie auf [nodejs.org](https://nodejs.org/en/) und laden die LTS Version herunter. Anschliessend installieren Sie diese. 

2. Als zweites brauchen Sie noch Visual Studio Code. Dazu gehen Sie auf [code.visualstudio.com](https://code.visualstudio.com/), laden es herunter und installieren Sie es.

3. Sobald Sie node.js und Visual Studio Code instaliert haben, clonen Sie das Repository. Wie das geht finden Sie [hier.](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

4. Öffnen Sie nun Ihr Visual Studio Code und navigieren Sie in Ihren Projektordner. Sobald Sie in Ihrem Ordner M133Webshop sind, gehen Sie in das Terminal in Visual Studio Code (In der Menüleiste auf Terminal->New Terminal)
Dort geben Sie folgenden Code Snippet ein:
  ```
  npm i
  ```
  Nun werden alle nötigen Packages installiert welche für das Projekt benötigt werden. Wenn Sie alles installiert werden aber immernoch rote Zeilen im Code sind, schliessen Sie das Projekt und öffnen Sie es neu.
  
  5. Als nächstes geben Sie folgenden Code Snipped ein:
  ```
  tsc
  ```
  Nun werden alle typescript Dateien (datei.ts) in Javascript Dateien (datei.js) transkompiliert. Diese erscheinen dann im **build** ordner
  
  6. Navigieren Sie nun in Ihrem Terminal welches Sie schon offen haben in den build Ordner.
  
  7. Wenn Sie in Ihrem Build Ordner angelangt sind, tippen Sie 
  
  ```
  node server.js
  ```
  um den Webserver zu starten.
  
  8. Sobald der Webserver gestartet ist, können Sie im Browser unter localhost:8080 den Webshop aufrufen.


## Anforderungen
**Versionierung:**
Ein Git-Repository wurde mit der Lehrperson geteilt
(E-Mail), eine Commit-History mit den
Zwischenständen ist ersichtlich, Commit-Messages sind aussagekräftig,
keine Node-Module oder kompilierte bzw. transpilierte Dateien sind auf git 

**Ausführbarkeit:**
Es ist eine Anleitung vorhanden, wie mit installiertem und aktuellen NodeJs
Ihre Applikation in Betrieb genommen werden kann (was installiert werden
muss und wie die App gestartet und aufgerufen wird).
Alternativ können Sie die App auch hosten und der Lehrperson den Link
mitteilen. 

**Produktübersicht:**
Die Web-Applikation zeigt alle Produkte mit Bildern und Preisen (inkl.
etwaigen Preisreduktionen an) 

**Detailansicht:**
Ein Produkt wird einzeln angezeigt, wenn in der Produktübersicht auf ein
Produkt geklickt wird 

**Mini-Warenkorb:**
Auf mind. Produkteübersicht und Detailansicht ist ein Mini-Warenkorb, der die
Anzahl Produkte (1x Käse und 3x Tomaten = Anzahl 4) im Warenkorb
anzeigt. Alternativ zur Anzahl kann auch das Gesamttotal (in Fr.) angezeigt
werden. 

**Produkt hinzufügen:**
Wenn in der Detailansicht ein Produkt hinzugefügt wird, wird der MiniWarenkorb aktualisiert
Der Warenkorb wird in einer Session geführt. 

**Warenkorb:**
Wenn auf den Mini-Warenkorb geklickt wird, wird die Warenkorb-Ansicht
geöffnet.
Darin werden alle Produkte aufgelistet.
Wenn ein gleiches Produkt mehrfach in den Warenkorb gelegt wurde, soll
dieses nur 1x in der Auflistung auftauchen, jedoch mit der entsprechenden
Anzahl
Zu jedem Produkt soll ein Total berechnet werden (reduzierter Preis, falls 
vorhanden, berücksichtigen)
Es soll ein Gesamttotal angezeigt werden
Preise werden im Format CHF 0.00 angezeigt 

**Anzahl anpassen:**
Im Warenkorb kann zu jedem Produkt die Anzahl angepasst werden.
Wenn die Anzahl auf 0 gestellt wird, soll das Produkt aus der Auflistung im
Warenkorb verschwinden. 


**Mini-Warenkorb in Warenkorbansicht:**
In der Warenkorb-Ansicht wird ebenfalls der Mini-Warenkorb dargestellt. Bei
jeder Produkte-Anpassung soll sich auf der Mini-Warenkorb entsprechend
anpassen. 

**Aktualisierbarkeit:**
Produkteübersicht, Detailansicht und Warenkorb können neu geladen werden
(Ansicht bleibt gleich, wenn F5 gedrückt wird) 


**Frontendvalidierung:**
Auf der Checkout-Ansicht werden die Formulareingaben überprüft. Wenn
Felder nicht oder falsch ausgefüllt wurden, soll der Benutzer daran gehindert
werden, auf den «Einkauf Abschliessen»-Button zu klicken. 

**Backend-Validierung:**
Für den Fall, dass der Benutzer die Frontend-Validierung überlistet hat,
sollen die Felder auf dem Backend nochmals geprüft werden.
Wenn die Prüfung erfolgreich war, soll dies bestätigt werden und der
Benutzer soll wieder einen leeren Warenkorb haben.
Wenn die Prüfung fehlschlug, soll dies dem Benutzer mitgeteilt werden und
der Warenkorb soll noch vorhanden sein. 

**TypeScript:**
Auf dem Backend wird TypeScript statt JavaScript eingesetzt 

**Frontend-Typescript:**
Auch auf dem Frontend wird TypeScript eingesetzt.
Das TypeScript wird mittels Webpack (oder ähnlichen) zu einem einzigen
JavaScript zusammengefasst.
Mind. 1 Type wird zwischen Backend und Frontend geteilt (irgendwo
vermerken, welcher Type) 

**Testing:**
Das Zusammenfassen der Items im Warenkorb (gleicher Produktetyp
zusammenfassen) sowie die Totalisierung der Kosten wird getestet. 

**Responsiveness:**
Die Web-Applikation skaliert ihr Aussehen je nach Browser-Grösse. Getestet
wird in 1600x900 und 414x736 

**Code-Verständnis:**
In der letzten Doppellektion des Semesters werden Fragen zu Ihrem
abgegebenen Code gestellt. Sie müssen also jeden Teil aus Ihrer Codebasis
kennen und verstehen. 
