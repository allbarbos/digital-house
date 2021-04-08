```sql
-- database
CREATE SCHEMA `digital_house_db` ;

-- clientes
CREATE TABLE `digital_house_db`.`clientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(30) NOT NULL,
  `cpf` CHAR(11) NOT NULL,
  `celular` VARCHAR(15) NOT NULL,
  `telefone_fixo` VARCHAR(14) NULL,
  PRIMARY KEY (`id`)
);

-- ordens
CREATE TABLE `digital_house_db`.`ordens` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data_compra` DATETIME NOT NULL DEFAULT now(),
  `data_entrega` DATETIME NOT NULL DEFAULT now(),
  `nome_destinatario` VARCHAR(30) NOT NULL,
  `endereco_destinatário` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`id`)
);

-- produtos
CREATE TABLE `digital_house_db`.`produtos` (
  `id` INT NOT NULL,
  `nome` VARCHAR(35) NOT NULL,
  `categoria` VARCHAR(25) NOT NULL,
  `preco` DECIMAL(15,2) NOT NULL,
  `quantidade` MEDIUMINT NOT NULL,
  PRIMARY KEY (`id`)
);

-- ordem detalhes
CREATE TABLE `digital_house_db`.`ordem_detalhes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `ordem_id` INT NOT NULL,
  `produto_id` INT NOT NULL,
  `desconto` DECIMAL(10,2) NOT NULL,
  `preco_unitario` DECIMAL(15,2) NOT NULL,
  `quantidade` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ordem_detalhes_1_idx` (`ordem_id` ASC),
  INDEX `fk_ordem_detalhes_2_idx` (`produto_id` ASC),
  CONSTRAINT `fk_ordem_detalhes_1`
    FOREIGN KEY (`ordem_id`)
    REFERENCES `digital_house_db`.`ordens` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ordem_detalhes_2`
    FOREIGN KEY (`produto_id`)
    REFERENCES `digital_house_db`.`produtos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


INSERT INTO `digital_house_db`.`clientes` (`nome`, `cpf`, `celular`) VALUES ("cliente um", "12345678764", "+5518997613455");
INSERT INTO `digital_house_db`.`clientes` (`nome`, `cpf`, `celular`) VALUES ("cliente dois", "12345678764", "+5518997613455");
INSERT INTO `digital_house_db`.`clientes` (`nome`, `cpf`, `celular`) VALUES ("cliente tres", "12345678764", "+5518997613455");

```