USE PROVAANIME;

-- cadastrar no anime
INSERT INTO TB_ANIME (ID_ANIME, NM_ANIME)
     VALUES  ('3', 'NARUTO');

-- consultar animes
SELECT ID_ANIME   ID,
	   NM_ANIME   NOME
	FROM TB_ANIME;