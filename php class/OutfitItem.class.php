<?php

// MariaDB [swdb]> desc OutfitItem; 
// +-----------------+------------------+------+-----+---------+----------------+
// | Field           | Type             | Null | Key | Default | Extra          |
// +-----------------+------------------+------+-----+---------+----------------+
// | OutfitID        | int(10) unsigned | NO   | PRI | NULL    | auto_increment |
// | OutfitImg       | longblob         | YES  |     | NULL    |                |
// | OutfitCateName  | varchar(30)      | NO   |     | NULL    |                |
// | OutfitOwnerID   | varchar(20)      | NO   | MUL | NULL    |                |
// | FItemsSerialize | varchar(100)     | YES  |     | NULL    |                |
// +-----------------+------------------+------+-----+---------+----------------+

class OutfitItem  {

    private $OutfitID;
    private $OutfitImg;
    private $OutfitCateName;
    private $OutfitOwnerID;
    private $FItemsSerialize;

    //getter
    function getOutfitID()
    {
        return $this->OutfitID;
    }

    function getOutfitImg()
    {
        return $this->OutfitImg;
    }

    function getOutfitCateName()
    {
        return $this->OutfitCateName;
    }

    function getOutfitOwnerID()
    {
        return $this->OutfitOwnerID;
    }

    function getFItemsSerialize()
    {
        return $this->FItemsSerialize;
    }

    //setter
    function setOutfitID(int $ItemID)
    {
        $this->ItemID = $ItemID;
    }

    function setOutfitImg($OutfitImg)
    {
        $this->OutfitImg = $OutfitImg;
    }

    function setOutfitCateName(string $OutfitCateName)
    {
        $this->OutfitCateName = $OutfitCateName;
    }

    function setOutfitOwnerID(int $OutfitOwnerID)
    {
        $this->OutfitOwnerID = $OutfitOwnerID;
    }

    function setFItemsSerialize(string $FItemsSerialize)
    {
        $this->FItemsSerialize = $FItemsSerialize;
    }
}

?>