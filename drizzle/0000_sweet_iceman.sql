CREATE TABLE `articles` (
	`id` int AUTO_INCREMENT NOT NULL,
	`libelle` varchar(255),
	CONSTRAINT `articles_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `commandes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`dateCommande` date,
	`montant` double,
	`userId` varchar(100),
	CONSTRAINT `commandes_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `ligneCommande` (
	`id` int AUTO_INCREMENT NOT NULL,
	`montant` double,
	`quantite` int,
	`articleId` int,
	`commandeId` int,
	CONSTRAINT `ligneCommande_id` PRIMARY KEY(`id`)
);
