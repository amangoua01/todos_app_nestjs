import { double, int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { relations } from "drizzle-orm";

export const articles = mysqlTable('articles', {
  id: int("id").primaryKey().autoincrement(),
  libelle: varchar("libelle", { length: 255 }),
});


export const commandes = mysqlTable("commandes", {
  id: int("id").primaryKey().autoincrement(),
  dateCommande: varchar("dateCommande", { length: 20 }),
  montant: double("montant"),
  userId: varchar("userId", { length : 100 })
});

export const ligneCommande = mysqlTable("ligneCommande", {
  id: int("id").primaryKey().autoincrement(),
  montant: double("montant"),
  quantite: int("quantite"),
  articleId: int("articleId"),
  commandeId: int("commandeId"),
});



export const ligneCommandeArticleRelations = relations(ligneCommande, ( { one } ) => ({
  article: one(articles, ),
  commande: one(commandes)
}));