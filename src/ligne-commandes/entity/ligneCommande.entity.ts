import { double, int } from 'drizzle-orm/mysql-core';

export class LigneCommande {
  id: number;
  montant: number;
  quantite: number;
  articleId: number;
  commandeId: number;
}