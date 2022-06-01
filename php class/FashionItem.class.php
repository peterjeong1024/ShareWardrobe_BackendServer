<?php

// MariaDB [swdb]> desc FashionItem;
// +--------------+------------------+------+-----+---------+----------------+
// | Field        | Type             | Null | Key | Default | Extra          |
// +--------------+------------------+------+-----+---------+----------------+
// | ItemID       | int(10) unsigned | NO   | PRI | NULL    | auto_increment |
// | ItemName     | varchar(30)      | NO   |     | NULL    |                |
// | ItemDesc     | varchar(100)     | YES  |     | NULL    |                |
// | ItemColor    | varchar(20)      | YES  |     | NULL    |                |
// | ItemFabric   | varchar(20)      | YES  |     | NULL    |                |
// | ItemPrice    | float(10,2)      | NO   |     | NULL    |                |
// | ItemSize     | varchar(20)      | YES  |     | NULL    |                |
// | ItemSeason   | varchar(20)      | YES  |     | NULL    |                |
// | ItemBrand    | varchar(50)      | YES  |     | NULL    |                |
// | ItemImg      | longblob         | YES  |     | NULL    |                |
// | ItemLocation | varchar(100)     | NO   |     | NULL    |                |
// +--------------+------------------+------+-----+---------+----------------+

class FashionItem
{
    private $ItemID;
    private $ItemName;
    private $ItemDesc;
    private $ItemColor;
    private $ItemFabric;
    private $ItemPrice;
    private $ItemSize;
    private $ItemSeason;
    private $ItemBrand;
    private $ItemImg;
    private $ItemLocation;

    // getter
    function getItemID()
    {
        return $this->ItemID;
    }

    function getItemName()
    {
        return $this->ItemName;
    }

    function getItemDesc()
    {
        return $this->ItemDesc;
    }

    function getItemColor()
    {
        return $this->ItemColor;
    }

    function getItemFabric()
    {
        return $this->ItemFabric;
    }

    function getItemPrice()
    {
        return $this->ItemPrice;
    }

    function getItemSize()
    {
        return $this->ItemSize;
    }

    function getItemSeason()
    {
        return $this->ItemSeason;
    }

    function getItemBrand()
    {
        return $this->ItemBrand;
    }

    function getItemImg()
    {
        return $this->ItemImg;
    }

    function getItemLocation()
    {
        return $this->ItemLocation;
    }

    //setter
    function setItemID(int $ItemID)
    {
        $this->ItemID = $ItemID;
    }

    function setItemName(String $ItemName)
    {
        $this->ItemName = $ItemName;
    }

    function setItemDesc(String $ItemDesc)
    {
        $this->ItemDesc = $ItemDesc;
    }

    function setItemColor(String $ItemColor)
    {
        $this->ItemColor = $ItemColor;
    }

    function setItemFabric(String $ItemFabric)
    {
        $this->ItemFabric = $ItemFabric;
    }

    function setItemPrice(float $ItemPrice)
    {
        $this->ItemPrice = $ItemPrice;
    }

    function setItemSize(String $ItemSize)
    {
        $this->ItemSize = $ItemSize;
    }

    function setItemSeason(String $ItemSeason)
    {
        $this->ItemSeason = $ItemSeason;
    }

    function setItemBrand(String $ItemBrand)
    {
        $this->ItemBrand = $ItemBrand;
    }

    function setItemImg($ItemImg)
    {
        $this->ItemImg = $ItemImg;
    }

    function setItemLocation(String $ItemLocation)
    {
        $this->ItemLocation = $ItemLocation;
    }
}
