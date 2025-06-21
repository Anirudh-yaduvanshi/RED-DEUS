const productData = [
    {
        category: "Analgesic & Antipyretic",
        formulation: "Aceclofenac 100 mg & Paracetamol 325 mg",
        dosageForm: "Tablets",
        type: "Uncoated / Film"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Aceclofenac 100 mg & Serratiopeptidase 15 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Aceclofenac 100 mg & Tizanidine 2 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Aceclofenac 100 mg, Paracetamol 325 mg & Trypsin-chymotrypsin 150000 units",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Aceclofenac 100 mg & Paracetamol 325 mg",
        dosageForm: "Tablets",
        type: "Bilayered"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Aceclofenac 100 mg, Paracetamol 325 mg & Chlorzoxazone 250 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Aceclofenac 100/100 mg, Paracetamol 325/325 mg & Serratiopeptidase 15/10 mg",
        dosageForm: "Tablets",
        type: "Dual Strength"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Aceclofenac 100/100 mg, Paracetamol 325/325 mg & Thiocolchicoside 4/8 mg",
        dosageForm: "Tablets",
        type: "Dual Strength"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Aceclofenac 200 mg",
        dosageForm: "Tablets",
        type: "SR"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Aceclofenac IP 100 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Diacerein 50 mg & Aceclofenac 100 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Diacerein 50 mg, MSM 250 mg & Glucosamine 750 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Diclofenac Potassium 50 mg & Paracetamol 325 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Diclofenac Potassium 50 mg & Serratiopeptidase 10 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Diclofenac Potassium 50 mg, Paracetamol 325 mg & Chlorzoxazone 250 mg",
        dosageForm: "Tablets",
        type: "Film Coated"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Diclofenac Potassium 50 mg & Metaxalone 400 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Diclofenac Potassium 50 mg, Paracetamol 325 mg & Chlorzoxazone 250 mg",
        dosageForm: "Tablets",
        type: "Uncoated"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Diclofenac Potassium 50/50 mg, Paracetamol 325/325 mg & Serratiopeptidase 15/10 mg",
        dosageForm: "Tablets",
        type: "Dual Strength"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Diclofenac Sodium Gastro-resistant IP 25/50 mg",
        dosageForm: "Tablets",
        type: "Enteric Coated"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Diclofenac Sodium IP 100 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Eperisone Hydrochloride 50 mg & Paracetamol 500 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Etodolac 300/400 mg & Thiocolchicoside 4/8 mg",
        dosageForm: "Tablets",
        type: "Multi Strength"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Etodolac 400 mg & Tolperisone Hydrochloride 150 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Etodolac Extended Release IP 400/600 mg",
        dosageForm: "Tablets",
        type: "ER"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Etodolac IP 400 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Etoricoxib 60 mg & Paracetamol 325 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Etoricoxib IP 60/90/120 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Febuxostat 40/80 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Flavoxate HCl IP 100/200 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Flupirtine Maleate 100 mg & Thiocolchicoside 4/8 mg",
        dosageForm: "Tablets",
        type: "Multi Strength"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Glucosamine Sulphate Potassium Chloride 750 mg & Diacerein 50 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Ibuprofen 400 mg, Paracetamol 325 mg & Caffeine 25 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Ketoprofen 50 mg & Thiocolchicoside 4 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Ketorolac Tromethamine Dispersible 10 mg",
        dosageForm: "Tablets",
        type: "Dispersible"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Lornoxicam 4/8 mg & Thiocolchicoside 4/8 mg",
        dosageForm: "Tablets",
        type: "Multi Strength"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Lornoxicam 4/8 mg & Paracetamol 325 mg",
        dosageForm: "Tablets",
        type: "Multi Strength"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Lornoxicam 8/16 mg & Thiocolchicoside 8/16 mg",
        dosageForm: "Tablets",
        type: "Multi Strength"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Lornoxicam SR 8/12/16 mg",
        dosageForm: "Tablets",
        type: "SR"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Mesalamine Prolonged Release IP 1200 mg",
        dosageForm: "Tablets",
        type: "PR"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Naproxen IP 250/500 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Nefopam Hydrochloride 30 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Nimesulide 100 mg, Paracetamol 325 mg & Chlorzoxazone 250 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Nimesulide 100 mg, Paracetamol 325 mg & Serratiopeptidase 10 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Nimesulide IP 100 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Nimesulide 100 mg & Paracetamol 325 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Paracetamol 500/650 mg & Caffeine 25/50 mg IP",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Paracetamol 500 mg & Thiocolchicoside 4/8 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Paracetamol 650 mg & Caffeine 50 mg IP",
        dosageForm: "Tablets",
        type: "Film Coated"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Paracetamol Bilayer 1000 mg",
        dosageForm: "Tablets",
        type: "Bilayered"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Paracetamol Dispersible 250/650 mg",
        dosageForm: "Tablets",
        type: "Dispersible"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Paracetamol Sustained Release 1000 mg",
        dosageForm: "Tablets",
        type: "SR"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Paracetamol IP 500/650 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Pirfenidone IP 200/400/801 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Piroxicam Mouth Dissolving 20 mg",
        dosageForm: "Tablets",
        type: "ODT"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Piroxicam Sublingual 20 mg",
        dosageForm: "Tablets",
        type: "Sublingual"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Ranolazine Extended Release 500/750 mg",
        dosageForm: "Tablets",
        type: "ER"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Ranolazine Extended Release 500/750 mg",
        dosageForm: "Tablets",
        type: "ER"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Serratiopeptidase IP 10 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Thiocolchicoside 4/8 mg & Aceclofenac 100/100 mg",
        dosageForm: "Tablets",
        type: "Multi Strength"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Thiocolchicoside 4/8 mg & Etoricoxib 60/60 mg",
        dosageForm: "Tablets",
        type: "Multi Strength"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Tolperisone HCl 150 mg & Paracetamol 325 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Tolperisone HCl SR 450 mg",
        dosageForm: "Tablets",
        type: "SR"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Tolperisone Hydrochloride 150 mg & Diclofenac Sodium 50 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Tolperisone Hydrochloride 450 mg & Diclofenac Sodium 100 mg",
        dosageForm: "Tablets",
        type: "ER"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Tolperisone Hydrochloride 150 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Trypsin 48 mg, Bromelain 90 mg, Rutoside 100 mg & Aceclofenac 100 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Trypsin 48 mg, Bromelain 90 mg, Rutoside 100 mg & Diclofenac Sodium 50 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Trypsin 48 mg, Bromelain 90 mg, Rutoside Trihydrate 100 mg & Diclofenac Sodium 50 mg",
        dosageForm: "Tablets",
        type: "Enteric Coated"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Trypsin 48/96 mg, Bromelain 90/180 mg & Rutoside Trihydrate 100/200 mg",
        dosageForm: "Tablets",
        type: "Multi Strength"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Trypsin-Chymotrypsin 50,000 AU & Aceclofenac 100 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Trypsin-Chymotrypsin 50,000 AU & Diclofenac Potassium 50 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Trypsin-Chymotrypsin 50,000 AU, Aceclofenac 100 mg & Paracetamol 325 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Trypsin-Chymotrypsin 50,000 AU, Diclofenac Potassium 50 mg & Paracetamol 325 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Trypsin-Chymotrypsin Tablets 50,000/100,000/200,000 AU",
        dosageForm: "Tablets",
        type: "Multi Strength"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Aceclofenac (SR) 200 mg & Cyclobenzaprine HCl (SR) 15 mg",
        dosageForm: "Tablets",
        type: "SR"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Aceclofenac 100 mg, Tolperisone HCl 150 mg & Paracetamol 325 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },

    // ANTIVIRAL DRUGS

    {
        category: "Antiviral",
        formulation: "Acyclovir BP 400 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Acyclovir IP 400/800 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Azithromycin 250/500 mg & Lactic Acid Bacillus 60 Million Spores",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Azithromycin BP 250/500 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Azithromycin IP 250/500 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Ciprofloxacin 500 mg & Tinidazole 600 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Ciprofloxacin IP 250/500 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Clarithromycin Dispersible 125 mg",
        dosageForm: "Tablets",
        type: "Dispersible"
    },
    {
        category: "Antiviral",
        formulation: "Clarithromycin ER USP 500 mg",
        dosageForm: "Tablets",
        type: "Extended Release"
    },
    {
        category: "Antiviral",
        formulation: "Clarithromycin IP 250/500 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Co-trimoxazole IP",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Daclatasvir 30/60 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Doxycycline Hyclate USP 100 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Famciclovir IP 250/500 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Gemifloxacin IP 320 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Griseofulvin IP 125/250/500 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Levofloxacin 250 mg & Ornidazole 500 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Levofloxacin IP 250/500/750 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Levofloxacin USP 250/500 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Linezolid IP 600 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Minocycline Hydrochloride Extended Release USP 45/60 mg",
        dosageForm: "Tablets",
        type: "ER"
    },
    {
        category: "Antiviral",
        formulation: "Minocycline Hydrochloride USP 50/100 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Moxifloxacin HCl BP 400 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Nitazoxanide Dispersible 200 mg",
        dosageForm: "Tablets",
        type: "Dispersible"
    },
    {
        category: "Antiviral",
        formulation: "Nitazoxanide 500 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Nitrofurantoin SR 100 mg",
        dosageForm: "Tablets",
        type: "SR"
    },
    {
        category: "Antiviral",
        formulation: "Norfloxacin 400 mg & Tinidazole 600 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Ofloxacin 200 mg & Lactic Acid Bacillus 60 million spores",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Ofloxacin 200 mg & Ornidazole 500 mg IP",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Ofloxacin 200 mg, Ornidazole 500 mg & Zinc Bisglycinate 50 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Ofloxacin 200 mg & Flavoxate HCl 200 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Ofloxacin IP 200/400 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Prulifloxacin 600 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Racecadotril 100 mg & Ofloxacin 200 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Racecadotril Dispersible 10/30 mg",
        dosageForm: "Tablets",
        type: "Dispersible"
    },
    {
        category: "Antiviral",
        formulation: "Rifaximin Dispersible 200 mg",
        dosageForm: "Tablets",
        type: "Dispersible"
    },
    {
        category: "Antiviral",
        formulation: "Rifaximin 200/400/550 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Roxythromycin IP 150 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiviral",
        formulation: "Trimethoprim IP 100/200 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiallergic",
        formulation: "Betahistine Di HCl SR 24 mg",
        dosageForm: "Tablets",
        type: "SR"
    },
    {
        category: "Antiallergic",
        formulation: "Betahistine Hydrochloride IP 8/16 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiallergic",
        formulation: "Bilastine 20 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiallergic",
        formulation: "Cetirizine Dihydrochloride IP 10 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiallergic",
        formulation: "Cinnarizine 20 mg & Dimenhydrinate 40 mg",
        dosageForm: "Tablets",
        type: "Mouth Dissolving"
    },
    {
        category: "Antiallergic",
        formulation: "Cinnarizine 20 mg & Domperidone 15 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiallergic",
        formulation: "Cinnarizine SR 75 mg",
        dosageForm: "Tablets",
        type: "SR"
    },
    {
        category: "Antiallergic",
        formulation: "Cinnarizine IP 25/75 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiallergic",
        formulation: "Desloratadine 5 mg & Montelukast 10 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiallergic",
        formulation: "Ebastine 10 mg & Montelukast 10 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiallergic",
        formulation: "Ebastine IP 10/20 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiallergic",
        formulation: "Fexofenadine HCl IP 120/180 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiallergic",
        formulation: "Hydroxyzine Hydrochloride IP 10/25 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiallergic",
        formulation: "Levocetirizine Di HCl 2.5 mg & Montelukast 4 mg",
        dosageForm: "Tablets",
        type: "Dispersible"
    },
    {
        category: "Antiallergic",
        formulation: "Levocetirizine Dihydrochloride 5 mg & Ambroxol HCl 30 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiallergic",
        formulation: "Levocetirizine Dihydrochloride 5 mg, Montelukast 10 mg & Ambroxol HCl SR 75 mg",
        dosageForm: "Tablets",
        type: "SR Combo"
    },

    // Anti-Allergic
    {
        category: "Antiallergic",
        formulation: "Levocetirizine Dihydrochloride Dispersible 5/10 mg",
        dosageForm: "Tablets",
        type: "Dispersible"
    },
    {
        category: "Antiallergic",
        formulation: "Levocetirizine Dihydrochloride IP 5 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiallergic",
        formulation: "Loratadine 5 mg & Ambroxol Hydrochloride 60 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiallergic",
        formulation: "Loratadine USP 10 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiallergic",
        formulation: "Montelukast 10 mg & Levocetirizine Dihydrochloride 5 mg IP",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiallergic",
        formulation: "Montelukast 10 mg, Fexofenadine HCl 120 mg & Acebrophylline SR 200 mg",
        dosageForm: "Tablets",
        type: "SR"
    },
    {
        category: "Antiallergic",
        formulation: "Montelukast Sodium 10 mg & Fexofenadine Hydrochloride 120 mg",
        dosageForm: "Tablets",
        type: "Chewable"
    },
    {
        category: "Antiallergic",
        formulation: "Montelukast Sodium 10 mg & Fexofenadine Hydrochloride 120 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiallergic",
        formulation: "Roxythromycin 150 mg & Ambroxol HCl 30 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },

    // Antifungal
    {
        category: "Antifungal",
        formulation: "Fluconazole 150 mg & Ivermectin 6/12 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antifungal",
        formulation: "Fluconazole IP 150/200/400 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antifungal",
        formulation: "Itraconazole SR 400 mg",
        dosageForm: "Tablets",
        type: "SR"
    },
    {
        category: "Antifungal",
        formulation: "Ketoconazole IP 200 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antifungal",
        formulation: "Ketoconazole USP 200 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antifungal",
        formulation: "Terbinafine Hydrochloride BP 250/500 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antifungal",
        formulation: "Terbinafine Hydrochloride IP 250/500 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antifungal",
        formulation: "Voriconazole IP 200 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },

    // Anticold
    {
        category: "Anticold",
        formulation: "Aceclofenac 100 mg, Paracetamol 325 mg, Cetirizine Dihydrochloride 10 mg, Phenylephrine Hydrochloride 5 mg & Caffeine 25 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Anticold",
        formulation: "Cetirizine 5 mg, Paracetamol 325 mg, Ambroxol HCl 60 mg & Phenylephrine HCl 5 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Anticold",
        formulation: "Cetirizine Hydrochloride 5 mg & Phenylephrine HCl 10 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Anticold",
        formulation: "Dextromethorphan Hydrobromide 10 mg, Phenylephrine HCl 5 mg & Chlorpheniramine Maleate 2 mg",
        dosageForm: "Tablets",
        type: "Dispersible"
    },
    {
        category: "Anticold",
        formulation: "Dextromethorphan HBr 10 mg, Phenylephrine HCl 5 mg & Chlorpheniramine Maleate 2 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Anticold",
        formulation: "Levocetirizine Dihydrochloride 5 mg & Phenylephrine HCl 10 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Anticold",
        formulation: "Levocetirizine Dihydrochloride 5 mg & Ambroxol HCl 60 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Anticold",
        formulation: "Levocetirizine Dihydrochloride 5 mg & Phenylephrine HCl 30 mg",
        dosageForm: "Tablets",
        type: "SR Bilayered"
    },
    {
        category: "Anticold",
        formulation: "Levocetirizine Dihydrochloride 5 mg, Phenylephrine HCl 5 mg & Paracetamol 325 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Anticold",
        formulation: "Nimesulide 100 mg, Phenylephrine HCl 5 mg & Levocetirizine HCl 5 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Anticold",
        formulation: "Nimesulide 100 mg, Phenylephrine HCl 10 mg, Cetirizine HCl 5 mg & Caffeine 30 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Anticold",
        formulation: "Paracetamol 325 mg, Phenylephrine HCl 5 mg & Chlorpheniramine Maleate 2 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Anticold",
        formulation: "Paracetamol 325 mg, Phenylephrine HCl 5 mg & Cetirizine HCl 5 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Anticold",
        formulation: "Paracetamol 325/500 mg, Phenylephrine HCl 5 mg, Caffeine 30 mg & Diphenhydramine HCl 25 mg",
        dosageForm: "Tablets",
        type: "Combo Strength"
    },
    {
        category: "Anticold",
        formulation: "Paracetamol 500 mg, Phenylephrine HCl 10/5 mg & Chlorpheniramine Maleate 2/2 mg",
        dosageForm: "Tablets",
        type: "Multi Strength"
    },
    {
        category: "Anticold",
        formulation: "Paracetamol, Guaiphenesin, Bromhexine Hydrochloride, Phenylephrine HCl & Chlorpheniramine Maleate",
        dosageForm: "Tablets",
        type: "Combo"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Dicyclomine HCl 20 mg & Paracetamol 500 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Domperidone 10 mg & Paracetamol 325 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Domperidone Dispersible 10 mg",
        dosageForm: "Tablets",
        type: "Dispersible"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Domperidone IP 10 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Duloxetine Gastro-resistant IP 20 mg",
        dosageForm: "Tablets",
        type: "GR"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Eperisone HCl 50 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Esomeprazole 20 mg & Domperidone 15 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Esomeprazole Gastro-resistant IP 40 mg",
        dosageForm: "Tablets",
        type: "GR"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Esomeprazole with Sodium Bicarbonate Buffer",
        dosageForm: "Tablets",
        type: "Buffered"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Etamsylate 500 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Flupirtine Maleate 100 mg & Paracetamol 325 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Flupirtine Maleate SR 400 mg",
        dosageForm: "Tablets",
        type: "SR"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Granisetron Hydrochloride USP 1 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Lafutidine 5/10 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Lansoprazole Orally Disintegrating 15/30 mg",
        dosageForm: "Tablets",
        type: "ODT"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Mebeverine Hydrochloride SR 200 mg",
        dosageForm: "Tablets",
        type: "SR"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Mebeverine Hydrochloride IP 135 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Mefenamic Acid 500/250 mg & Dicyclomine Hydrochloride 20/20 mg",
        dosageForm: "Tablets",
        type: "Multi Strength"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Mefenamic Acid 250 mg & Drotaverine Hydrochloride 80 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Mefenamic Acid 250 mg & Dicyclomine Hydrochloride 10 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Mefenamic Acid 100 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Naproxen 250 mg & Domperidone 10 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Naproxen Sodium 500 mg & Domperidone 10 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Omeprazole Magnesium 20 mg & Domperidone 10 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Omeprazole Magnesium 10/20 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Ondansetron Orally Disintegrating IP 4/8 mg",
        dosageForm: "Tablets",
        type: "ODT"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Pantoprazole 20/40 mg & Domperidone 10 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Pantoprazole 40 mg & Ondansetron Hydrochloride 4 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Pantoprazole IP 40 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Paracetamol 325 mg & Dicyclomine HCl 20 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Paracetamol 325 mg & Mefenamic Acid 500 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Rabeprazole Gastro-resistant IP 40 mg",
        dosageForm: "Tablets",
        type: "GR"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Rabeprazole Sodium 20 mg & Domperidone 10 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Rabeprazole Sodium 20 mg & Ondansetron 4 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Rabeprazole Sodium 20/40 mg & Levosulpiride SR 75 mg",
        dosageForm: "Tablets",
        type: "SR"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Rabeprazole Sodium IP 20 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Ranitidine 150 mg, Domperidone 10 mg & Simethicone 5 mg",
        dosageForm: "Tablets",
        type: "Combo"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Ranitidine IP 75/150 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Rebamipide 100 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Sodium Bicarbonate USP 500/1000 mg",
        dosageForm: "Tablets",
        type: "Buffered"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Solifenacin Succinate IP 5/10 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Sulfasalazine Delayed-Release USP 500/1000 mg",
        dosageForm: "Tablets",
        type: "DR"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Sulfasalazine Gastro-resistant IP 500/1000 mg",
        dosageForm: "Tablets",
        type: "GR"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Tranexamic Acid 250 mg & Etamsylate 250 mg",
        dosageForm: "Tablets",
        type: "Combo"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Tranexamic Acid 500 mg & Mefenamic Acid 250 mg",
        dosageForm: "Tablets",
        type: "Combo"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Tranexamic Acid BP 250/500 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Tranexamic Acid IP 250/500 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Ursodeoxycholic Acid SR 300/450/500/600 mg",
        dosageForm: "Tablets",
        type: "SR"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Ursodeoxycholic Acid IP 150/300 mg",
        dosageForm: "Tablets",
        type: "Uncoated / Film Coated"
    },
    {
        category: "Gastric / Antispasmodic / Antiemetic",
        formulation: "Metoclopramide Hydrochloride IP 10 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Biotin 10 mg & Finasteride 1 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Biotin 10 mg, N-Acetylcysteine 50 mg, Calcium Pantothenate 100 mg, Selenium 65 mcg, Copper 3 mg & Zinc 22.5 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Biotin USP 5 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Calcium 250 mg, Calcitriol 0.25 mcg, Folic Acid 100 mcg, Zinc Sulphate 7.5 mg & Vitamin K2-7 50 mcg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Calcium 500 mg & Vitamin D3 250 IU",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Calcium 500 mg, Vitamin D3 2000 IU, Methylcobalamin 1500 mcg, L-Methylfolate Calcium 1 mg & Pyridoxal-5-Phosphate 0.5 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Calcium Carbonate 1250 mg, Calcitriol 0.25 mcg & Vitamin K2-7 100 mcg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Calcium Carbonate 500 mg, Calcitriol 0.25 mcg & Zinc Sulphate 7.5 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Calcium Citrate 1000 mg, Magnesium 100 mg, Zinc 4 mg, Vitamin D3 200 IU, Manganese 1.8 mg & Copper 1 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Calcium Citrate 1000 mg, Magnesium 100 mg, Zinc Sulphate 10 mg & Vitamin D3 200 IU",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Calcium Citrate 1250 mg, Calcitriol 0.25 mcg & Vitamin K2-7 50 mcg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Calcium Citrate 1250 mg, Magnesium Hydroxide 100 mg, Zinc 4 mg & Vitamin D3 250 IU",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Calcium Citrate 750 mg, Calcitriol 0.25 mcg, Magnesium Hydroxide 100 mg & Zinc Sulphate Mono 7.5 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Calcium Citrate Maleate 250 mg & Vitamin D3 400 IU",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Calcium Citrate Maleate 500 mg, Calcitriol 0.25 mcg & Zinc 7.5 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Calcium Citrate, Calcitriol, Magnesium & Zinc",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Calcium Pantothenate IP 100 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Calcium, Vitamin D3, Methylcobalamin, L-Methylfolate Calcium & Pyridoxal-5-Phosphate 20 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Cholecalciferol 1000 IU, Ferrous Ascorbate 100 mg, Folic Acid 1 mg & Cyanocobalamin 7.5 mcg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Doxylamine Succinate 10/20 mg & Pyridoxine Hydrochloride 10/20 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Doxylamine Succinate 10/20 mg, Pyridoxine HCl 10/20 mg & Folic Acid 5 mg",
        dosageForm: "Tablets",
        type: "Combo"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Ferrous Ascorbate 100 mg & Folic Acid 1.5 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Ferrous Ascorbate 100 mg, Folic Acid 1.1 mg, Cyanocobalamin 15 mcg & Zinc 22.5 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Ferrous Ascorbate 100 mg, Folic Acid 1.5 mg & Zinc 22.5 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Ferrous Ascorbate 100 mg, Folic Acid 1.1 mg, Methylcobalamin 1.5 mg & Zinc 22.5 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Ferrous Bisglycinate 60 mg, Folic Acid 1 mg, Zinc Bisglycinate 15 mg & Methylcobalamin 500 mcg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Folic Acid IP 5 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Ibandronic Acid 150 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "L-Carnitine 500 mg, Methylcobalamin 1500 mcg & Folic Acid 1.5 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "L-Carnitine 500 mg, Methylcobalamin 500 mcg & Folic Acid 1.5 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Metadoxine 500 mg, Silymarin 140 mg, L-Ornithine-L-Aspartate 150 mg, Pyridoxine Hydrochloride 3 mg & Folic Acid 1.5 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Methylcobalamin 1500 mcg, Alpha Lipoic Acid 100 mg, Pregabalin 75 mg & Pyridoxine Hydrochloride 3 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Methylcobalamin 1500 mcg, Alpha Lipoic Acid 100 mg, Vitamin D3 1000 IU, Pyridoxine HCl 3 mg & Folic Acid 1.5 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Methylcobalamin 1500 mcg, Pyridoxine HCl 3 mg & Folic Acid 5 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Methylcobalamin 1500 mcg, L-Methylfolate 1 mg & Pyridoxal-5-Phosphate 0.5 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Methylcobalamin 500 mcg, Vitamin D3 200 IU, Calcium Citrate 1000 mg, Pyridoxine Hydrochloride 10 mg & Folic Acid 5 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Methylcobalamin 750 mcg, Alpha Lipoic Acid 100 mg, Gabapentin 300 mg & Pyridoxine Hydrochloride 3 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Methylcobalamin 1500 mcg (Extended Release)",
        dosageForm: "Tablets",
        type: "ER"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Methylcobalamin 1500 mcg (Sublingual)",
        dosageForm: "Tablets",
        type: "Sublingual"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Methylcobalamin 1500 mcg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Methylcobalamin 1500 mcg, Alpha Lipoic Acid 100 mg, Folic Acid 1.5 mg, Thiamine Mononitrate 10 mg & Pyridoxine HCl 3 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "N-Acetylcysteine 600 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Potassium Magnesium Citrate & Vitamin B6",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Pyridoxine HCl 3 mg, Niacinamide 100 mg, Cyanocobalamin 15 mcg, Folic Acid 1500 mcg, Chromium Picolinate 250 mcg, Selenium 100 mcg & Zinc 22.5 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Pyridoxine Hydrochloride IP 10 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Pyridoxine Hydrochloride, Nicotinamide, Cyanocobalamin, Folic Acid with Chromium, Zinc & Selenium",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Riboflavin, Folic Acid, Niacinamide & Lactic Acid Bacillus",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Risedronate Sodium 35/150 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Sodium Feredetate 231 mg, Folic Acid 1.5 mg & Cyanocobalamin 5 mcg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Thiamine Mononitrate 10 mg, Riboflavin 10 mg, Pyridoxine HCl 3 mg, Cyanocobalamin 15 mcg, Nicotinamide 45 mg & Calcium Pantothenate 50 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Nervous System",
        formulation: "Aceclofenac SR 200 mg & Pregabalin SR 75 mg",
        dosageForm: "Tablets",
        type: "SR"
    },
    {
        category: "Nervous System",
        formulation: "Acotiamide Hydrochloride 100 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Nervous System",
        formulation: "Amitriptyline Hydrochloride SR 50 mg",
        dosageForm: "Tablets",
        type: "SR"
    },
    {
        category: "Nervous System",
        formulation: "Amitriptyline IP 10/25 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Nervous System",
        formulation: "Brivaracetam IP 25/50/75/100 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Nervous System",
        formulation: "Citicoline 500 mg & Piracetam 400/800 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Nervous System",
        formulation: "Citicoline Sodium IP 500 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Nervous System",
        formulation: "Divalproex Sodium SR IP 750/1000 mg",
        dosageForm: "Tablets",
        type: "SR"
    },
    {
        category: "Nervous System",
        formulation: "Flunarizine Dihydrochloride IP 10 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Nervous System",
        formulation: "Gabapentin 100 mg & Methylcobalamin 1500 mcg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Nervous System",
        formulation: "Gabapentin 300/400 mg & Nortriptyline 10 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Nervous System",
        formulation: "Gabapentin IP 100/300/400/600/800 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Nervous System",
        formulation: "Levetiracetam PR IP 500/750/1000 mg",
        dosageForm: "Tablets",
        type: "PR"
    },
    {
        category: "Nervous System",
        formulation: "Levetiracetam IP 250/500/750/1000 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Nervous System",
        formulation: "Levosulpiride SR 75 mg",
        dosageForm: "Tablets",
        type: "SR"
    },
    {
        category: "Nervous System",
        formulation: "Levosulpiride 25/50/75/100/150/200 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Nervous System",
        formulation: "Methylcobalamin 1500 mcg & Pregabalin 300 mg",
        dosageForm: "Tablets",
        type: "SR Bilayered"
    },
    {
        category: "Nervous System",
        formulation: "Methylcobalamin 500 mcg & Gabapentin 100/300 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Nervous System",
        formulation: "Nortriptyline Hydrochloride IP 25 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Nervous System",
        formulation: "Olopatadine Hydrochloride 2.5/5 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Nervous System",
        formulation: "Piracetam 1200 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Nervous System",
        formulation: "Pregabalin 75 mg & Nortriptyline 10 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Nervous System",
        formulation: "Pregabalin 75 mg, Methylcobalamin 1500 mcg & Nortriptyline 10 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Nervous System",
        formulation: "Pregabalin SR 75/150 mg & Methylcobalamin 1500 mcg",
        dosageForm: "Tablets",
        type: "SR Bilayered"
    },
    {
        category: "Nervous System",
        formulation: "Pregabalin SR 75 mg, Methylcobalamin 1500 mcg & Nortriptyline 10 mg",
        dosageForm: "Tablets",
        type: "SR Bilayered"
    },
    {
        category: "Nervous System",
        formulation: "Pregabalin SR 75/150/300 mg",
        dosageForm: "Tablets",
        type: "SR"
    },
    {
        category: "Nervous System",
        formulation: "Risperidone 2/3/4 mg & Trihexyphenidyl HCl 2 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Nervous System",
        formulation: "Sumatriptan 50/85 mg & Naproxen 275/500/550 mg",
        dosageForm: "Tablets",
        type: "Combo"
    },
    {
        category: "Nervous System",
        formulation: "Trihexyphenidyl Hydrochloride IP 2 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    // Anthelmintic / Antiparasitic
    {
        category: "Anthelmintic / Antiparasitic",
        formulation: "Albendazole 400 mg & Ivermectin 6/12 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Anthelmintic / Antiparasitic",
        formulation: "Albendazole IP 400 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Anthelmintic / Antiparasitic",
        formulation: "Ivermectin IP 6/12 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Anthelmintic / Antiparasitic",
        formulation: "Ivermectin USP 12 mg",
        dosageForm: "Tablets",
        type: "USP"
    },
    {
        category: "Anthelmintic / Antiparasitic",
        formulation: "Levamisole IP 150 mg",
        dosageForm: "Tablets",
        type: "IP"
    },

    // Antimalarial
    {
        category: "Antimalarial",
        formulation: "Artemether 40/80 mg & Lumefantrine 240/480 mg IP",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Antimalarial",
        formulation: "Artemether 80 mg & Lumefantrine 480 mg (Film Coated)",
        dosageForm: "Tablets",
        type: "Film Coated"
    },
    {
        category: "Antimalarial",
        formulation: "Mefloquine Hydrochloride IP 250 mg",
        dosageForm: "Tablets",
        type: "IP"
    },

    // Antiarrhythmic
    {
        category: "Antiarrhythmic",
        formulation: "Amiodarone IP 100/200 mg",
        dosageForm: "Tablets",
        type: "IP"
    },

    // Anti-Hyperphosphatemia
    {
        category: "Anti-Hyperphosphatemia",
        formulation: "Sevelamer Carbonate 400/800 mg",
        dosageForm: "Tablets",
        type: "Standard"
    }
    , {
        category: "Glaucoma Treatment",
        formulation: "Acetazolamide IP 250 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Anti-Rheumatic",
        formulation: "Azathioprine IP 50 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Anti-Rheumatic",
        formulation: "Hydroxychloroquine Sulphate IP 200/300/400 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Anti-Rheumatic",
        formulation: "Leflunomide IP 10/20 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Muscle Relaxant",
        formulation: "Alfuzosin Prolonged Release IP 10 mg",
        dosageForm: "Tablets",
        type: "PR"
    },
    {
        category: "Muscle Relaxant",
        formulation: "Baclofen IP 10 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Muscle Relaxant",
        formulation: "Cyclobenzaprine ER 15 mg",
        dosageForm: "Tablets",
        type: "ER"
    },
    {
        category: "Muscle Relaxant",
        formulation: "Cyclobenzaprine IP 5/10 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Muscle Relaxant",
        formulation: "Drotaverine Hydrochloride 80 mg & Aceclofenac 100 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Muscle Relaxant",
        formulation: "Drotaverine Hydrochloride IP 80 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Tocolytic",
        formulation: "Isoxsuprine Hydrochloride SR 40 mg",
        dosageForm: "Tablets",
        type: "SR"
    },
    {
        category: "Tocolytic",
        formulation: "Ritodrine Hydrochloride IP 10 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Corticosteroid & Bronchodilator",
        formulation: "Acebrophylline SR 200 mg",
        dosageForm: "Tablets",
        type: "SR"
    },
    {
        category: "Corticosteroid & Bronchodilator",
        formulation: "Deflazacort 1/6/12/18/30 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Corticosteroid & Bronchodilator",
        formulation: "Doxofylline 400 mg & Ambroxol HCl 30 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Corticosteroid & Bronchodilator",
        formulation: "Doxofylline IP 400 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Corticosteroid & Bronchodilator",
        formulation: "Methylprednisolone IP 4/8/16 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Corticosteroid & Bronchodilator",
        formulation: "Montelukast 10 mg & Acebrophylline 200 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Corticosteroid & Bronchodilator",
        formulation: "Montelukast 10 mg & Doxofylline 400 mg",
        dosageForm: "Tablets",
        type: "SR Bilayered"
    },
    {
        category: "Corticosteroid & Bronchodilator",
        formulation: "Montelukast Sodium IP 5 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Corticosteroid & Bronchodilator",
        formulation: "Stanozolol USP 2 mg",
        dosageForm: "Tablets",
        type: "USP"
    },
    {
        category: "Corticosteroid & Bronchodilator",
        formulation: "Triamcinolone IP 4 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Antidepressant",
        formulation: "Dosulepin IP 25/50/75 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Antidepressant",
        formulation: "Flupentixol 0.5 mg & Melitracen 10 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antidepressant",
        formulation: "Fluvoxamine Maleate IP 25/50/100 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Antidepressant",
        formulation: "Paroxetine PR IP 12.5/25/37.5 mg",
        dosageForm: "Tablets",
        type: "PR"
    },
    {
        category: "Antidepressant",
        formulation: "Paroxetine IP 10/20/30 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Antidepressant",
        formulation: "Vortioxetine Hydrobromide 5/10/15/20 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Immunostimulant",
        formulation: "Pidotimod 800 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Anticoagulant",
        formulation: "Apixaban 2.5/5 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Anticoagulant",
        formulation: "Nicoumalone IP 1/2/3/4 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Anticoagulant",
        formulation: "Rivaroxaban 2.5/5/10/15/20 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Anticoagulant",
        formulation: "Warfarin Sodium IP 1/2/3/5/10 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Antimigraine",
        formulation: "Rizatriptan IP 5/10 mg",
        dosageForm: "Tablets",
        type: "IP"
    },

    // Erectile Dysfunction
    {
        category: "Erectile Dysfunction",
        formulation: "Sildenafil 50 mg & Dapoxetine 30 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Erectile Dysfunction",
        formulation: "Sildenafil Citrate IP 50/100 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Erectile Dysfunction",
        formulation: "Tadalafil IP 2.5/5/10/20 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Erectile Dysfunction",
        formulation: "Tadalafil 10 mg & Dapoxetine 30 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },

    // Anticonvulsants / Antiepileptics
    {
        category: "Anticonvulsant / Antiepileptic",
        formulation: "Carbamazepine Prolonged-release IP 100/200/400 mg",
        dosageForm: "Tablets",
        type: "PR"
    },
    {
        category: "Anticonvulsant / Antiepileptic",
        formulation: "Carbamazepine IP 200 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Anticonvulsant / Antiepileptic",
        formulation: "Oxcarbazepine SR 150/300/450/600/900 mg",
        dosageForm: "Tablets",
        type: "SR"
    },
    {
        category: "Anticonvulsant / Antiepileptic",
        formulation: "Oxcarbazepine IP 150/300/450/600 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Anticonvulsant / Antiepileptic",
        formulation: "Sodium Valproate & Valproic Acid CR 200/300/500/750/1000 mg",
        dosageForm: "Tablets",
        type: "CR"
    },
    {
        category: "Anticonvulsant / Antiepileptic",
        formulation: "Sodium Valproate Gastro-resistant IP 100/200 mg",
        dosageForm: "Tablets",
        type: "GR"
    },

    // Antiasthmatic & Mucolytic
    {
        category: "Antiasthmatic / Mucolytic",
        formulation: "Acebrophylline 100 mg & N-Acetylcysteine 600 mg (Bilayered)",
        dosageForm: "Tablets",
        type: "Bilayered"
    },
    {
        category: "Antiasthmatic / Mucolytic",
        formulation: "Acebrophylline 100 mg & N-Acetylcysteine 600 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Antiasthmatic / Mucolytic",
        formulation: "N-Acetylcysteine 150 mg & Taurine 500 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },

    // Uricosuric Agent
    {
        category: "Uricosuric Agent",
        formulation: "Allopurinol IP 100/300 mg",
        dosageForm: "Tablets",
        type: "IP"
    },

    // Prolactin Inhibitor
    {
        category: "Prolactin Inhibitor",
        formulation: "Cabergoline IP 0.25/0.5/1 mg",
        dosageForm: "Tablets",
        type: "IP"
    },

    // BPH
    {
        category: "BPH",
        formulation: "Dutasteride 0.5 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "BPH",
        formulation: "Silodosin 4 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "BPH",
        formulation: "Tamsulosin Hydrochloride (MR) 0.4 mg & Dutasteride 0.5 mg",
        dosageForm: "Tablets",
        type: "MR"
    },
    {
        category: "BPH",
        formulation: "Tamsulosin Hydrochloride 0.4 mg & Dutasteride 0.5 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },

    // Miscellaneous / Other
    {
        category: "Other",
        formulation: "Ambroxol Hydrochloride SR 75 mg & Doxycycline 100 mg",
        dosageForm: "Tablets",
        type: "SR"
    },
    {
        category: "Other",
        formulation: "Cilostazol IP 50/100/200 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Other",
        formulation: "Darifenacin ER 7.5/15 mg",
        dosageForm: "Tablets",
        type: "ER"
    },
    {
        category: "Other",
        formulation: "Dexamethasone IP 4 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Other",
        formulation: "Finasteride IP 1 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Other",
        formulation: "Fungal Diastase 100 mg, Papain 60 mg & Activated Charcoal 75 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Other",
        formulation: "Lacosamide BP 50/100/150/200 mg",
        dosageForm: "Tablets",
        type: "BP"
    },
    {
        category: "Other",
        formulation: "Letrozole IP 2.5 mg",
        dosageForm: "Tablets",
        type: "IP"
    },
    {
        category: "Other",
        formulation: "Levocarnitine USP 500 mg",
        dosageForm: "Tablets",
        type: "USP"
    },
    {
        category: "Other",
        formulation: "L-Ornithine-L-Aspartate 150 mg & Pancreatin 100 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Other",
        formulation: "L-Ornithine-L-Aspartate 250 mg & Silymarin 70 mg",
        dosageForm: "Tablets",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Carbonyl Iron 100 mg, Zinc 22.5 mg, Folic Acid 1.5 mg & Vitamin B12 15 mcg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Carbonyl Iron 50 mg, Zinc 22.5 mg & Folic Acid 0.5 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Coenzyme Q10 100 mg and Alpha Lipoic Acid 100 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Lycopene 2500 mcg, Beta-Carotene 10 mg, Zinc 7.5 mg, Copper 1 mg, Selenium 150 mcg & Manganese 1.5 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Methylcobalamin 1500 mcg, Alpha Lipoic Acid 100 mg, Pyridoxine HCl 10 mg & Folic Acid 1.5 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Methylcobalamin 1500 mcg, Alpha Lipoic Acid 100 mg, Thiamine Mononitrate 10 mg, Pyridoxine HCl 3 mg & Folic Acid 1.5 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Methylcobalamin 750 mcg, Alpha Lipoic Acid 100 mg, Pyridoxine Hydrochloride 3 mg & Folic Acid 1.5 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Pre & Probiotic with L-Glutamine",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Nervous System",
        formulation: "Pregabalin, Methylcobalamin & Alpha Lipoic Acid",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Nervous System",
        formulation: "Pregabalin, Methylcobalamin, Alpha Lipoic Acid & Folic Acid",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Nervous System",
        formulation: "Pregabalin, Mecobalamin, Alpha Lipoic Acid, L-Methylfolate & Pyridoxal 5 Phosphate",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Nervous System",
        formulation: "Pregabalin 75/150 mg, Methylcobalamin 750 mcg, Vitamin B6 1.5 mg, Folic Acid 0.75 mg & Benfotiamine 7.5 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Sodium Feredetate 100 mg, Folic Acid 1.5 mg, Vitamin B12 15 mcg & Zinc 22.5 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Vitamin A 5000 IU, Vitamin E 15 mg, Vitamin C 75 mg, Zinc Sulphate 7.5 mg, Copper Sulphate 1 mg, Biotin 30 mcg, Chromium 25 mcg, Molybdenum 25 mcg, Beta-Carotene 10 mg, Selenium 150 mcg & Manganese Sulphate 1.5 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Antiviral & Antifungal",
        formulation: "Clindamycin IP 150/300/600 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Antiviral & Antifungal",
        formulation: "Doxycycline 100 mg & Lactic Acid Bacillus 5 Billion Pellets/Powder",
        dosageForm: "Capsules",
        type: "Pellets"
    },
    {
        category: "Antiviral & Antifungal",
        formulation: "Doxycycline 100 mg & Lactic Acid Bacillus 5 Billion",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Antiviral & Antifungal",
        formulation: "Itraconazole B.P. 50/100/200/400 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Antiviral & Antifungal",
        formulation: "Itraconazole B.P. 100/200 mg (HPMC Capsule)",
        dosageForm: "Capsules",
        type: "HPMC"
    },
    {
        category: "Antiviral & Antifungal",
        formulation: "Minocycline Hydrochloride USP 50/75/100 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Antiviral & Antifungal",
        formulation: "Oseltamivir IP 75 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Antiviral & Antifungal",
        formulation: "Racecadotril IP 100 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Nervous System",
        formulation: "Pregabalin IP 50/75/150/300 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Nervous System",
        formulation: "Pregabalin 50/75 mg and Methylcobalamin 500/1500/750 mcg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Anticoagulant",
        formulation: "Dabigatran Etexilate 75/110/150 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Gastric Resistance & Antiemetics",
        formulation: "Dexlansoprazole Delayed Release 30/60 mg",
        dosageForm: "Capsules",
        type: "EC"
    },
    {
        category: "Gastric Resistance & Antiemetics",
        formulation: "Dexrabeprazole Sodium 10 mg & Domperidone 30 mg SR",
        dosageForm: "Capsules",
        type: "SR"
    },
    {
        category: "Gastric Resistance & Antiemetics",
        formulation: "Dexrabeprazole Sodium 10 mg & Levosulpiride 75 mg",
        dosageForm: "Capsules",
        type: "Pellets"
    },
    {
        category: "Gastric Resistance & Antiemetics",
        formulation: "Rabeprazole Sodium 20 mg (EC) & Levosulpiride 75 mg (SR)",
        dosageForm: "Capsules",
        type: "Pellets/SR"
    },
    {
        category: "Gastric Resistance & Antiemetics",
        formulation: "Esomeprazole 20/40 mg & Domperidone 30 mg",
        dosageForm: "Capsules",
        type: "SR"
    },
    {
        category: "Gastric Resistance & Antiemetics",
        formulation: "Esomeprazole 40 mg & Levosulpiride 75 mg",
        dosageForm: "Capsules",
        type: "SR"
    },
    {
        category: "Gastric Resistance & Antiemetics",
        formulation: "Esomeprazole 40 mg & Itopride Hydrochloride 150 mg",
        dosageForm: "Capsules",
        type: "SR"
    },
    {
        category: "Gastric Resistance & Antiemetics",
        formulation: "Esomeprazole IP 20/40 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Gastric Resistance & Antiemetics",
        formulation: "Esomeprazole Magnesium 40 mg & Domperidone 10 mg (IR), Domperidone 20 mg (SR)",
        dosageForm: "Capsules",
        type: "IR/SR"
    },
    {
        category: "Gastric Resistance & Antiemetics",
        formulation: "Ilaprazole 10 mg & Domperidone 30 mg",
        dosageForm: "Capsules",
        type: "SR"
    },
    {
        category: "Gastric Resistance & Antiemetics",
        formulation: "Lansoprazole IP 15/30 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Gastric Resistance & Antiemetics",
        formulation: "Omeprazole (Delayed-release) 20 mg & Domperidone (Sustained-release) 30 mg",
        dosageForm: "Capsules",
        type: "DR/SR"
    },
    {
        category: "Gastric Resistance & Antiemetics",
        formulation: "Omeprazole 20 mg & Domperidone 10 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Gastric Resistance & Antiemetics",
        formulation: "Omeprazole IP 20 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Gastric Resistance & Antiemetics",
        formulation: "Pantoprazole (EC) 40 mg & Itopride Hydrochloride 150 mg",
        dosageForm: "Capsules",
        type: "EC/SR"
    },
    {
        category: "Gastric Resistance & Antiemetics",
        formulation: "Pantoprazole 40 mg & Domperidone 30 mg",
        dosageForm: "Capsules",
        type: "SR"
    },
    {
        category: "Gastric Resistance & Antiemetics",
        formulation: "Pantoprazole 40 mg & Cinitapride 3 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Gastric Resistance & Antiemetics",
        formulation: "Pantoprazole 40 mg & Levosulpiride 75 mg",
        dosageForm: "Capsules",
        type: "SR"
    },
    {
        category: "Gastric Resistance & Antiemetics",
        formulation: "Pantoprazole 40 mg & Domperidone 10 mg (IR), Domperidone 20 mg (SR)",
        dosageForm: "Capsules",
        type: "IR/SR"
    },
    {
        category: "Gastric Resistance & Antiemetics",
        formulation: "Pantoprazole Gastro-resistant & Domperidone Prolonged-release",
        dosageForm: "Capsules",
        type: "GR/PR"
    },
    {
        category: "Gastric Resistance & Antiemetics",
        formulation: "Rabeprazole Sodium 20 mg & Itopride Hydrochloride 150 mg",
        dosageForm: "Capsules",
        type: "SR"
    },
    {
        category: "Gastric Resistance & Antiemetics",
        formulation: "Rabeprazole Sodium 20 mg & Aceclofenac 200 mg",
        dosageForm: "Capsules",
        type: "SR"
    },
    {
        category: "Gastric Resistance & Antiemetics",
        formulation: "Rabeprazole Sodium 20 mg & Domperidone 30 mg",
        dosageForm: "Capsules",
        type: "SR"
    },
    {
        category: "Gastric Resistance & Antiemetics",
        formulation: "Rabeprazole Sodium 20 mg & Levosulpiride 75 mg",
        dosageForm: "Capsules",
        type: "SR"
    },
    {
        category: "Gastric Resistance & Antiemetics",
        formulation: "Rabeprazole Sodium 20 mg (EC) & Domperidone 10 mg (IR), Domperidone 20 mg (SR)",
        dosageForm: "Capsules",
        type: "EC/IR/SR"
    },
    {
        category: "Gastric Resistance & Antiemetics",
        formulation: "Rabeprazole Sodium 40 mg & Domperidone",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Alpha Lipoic Acid 100 mg, Methylcobalamin 1500 mcg, Pyridoxine HCl 3 mg, Folic Acid 1.5 mg, Benfotiamine 50 mg, Biotin 5 mg, Chromium 200 mcg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Calcium 250 mg, Methylcobalamin 500 mcg, Calcitriol 0.25 mcg, Folic Acid 1.5 mg, Pyridoxine HCl 3 mg, Zinc 7.5 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Calcium & Vitamins",
        formulation: "Calcium Dobesilate 500 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Antispasmodic",
        formulation: "Mebeverine Hydrochloride Sustained Release 200 mg",
        dosageForm: "Capsules",
        type: "SR"
    },
    {
        category: "Antispasmodic",
        formulation: "Caroverine 20 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Analgesic & Anti-inflammatory",
        formulation: "Diacerein IP 50 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Analgesic & Anti-inflammatory",
        formulation: "Diclofenac Potassium 50 mg & Thiocolchicoside 4 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Analgesic & Anti-inflammatory",
        formulation: "Flupirtine Maleate 100 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Analgesic & Anti-inflammatory",
        formulation: "Oxaceprol 200 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Analgesic & Anti-inflammatory",
        formulation: "Thiocolchicoside IP 4/8 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Immunosuppressive",
        formulation: "Tacrolimus IP 0.5/1/2/5 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Immunosuppressive",
        formulation: "Tacrolimus Prolonged Release 3 mg",
        dosageForm: "Capsules",
        type: "PR"
    },
    {
        category: "Antidepressant",
        formulation: "Doxepin Hydrochloride IP 10/25/50/75 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "BPH",
        formulation: "Tamsulosin Hydrochloride Prolonged Release and Dutasteride",
        dosageForm: "Capsules",
        type: "PR"
    },
    {
        category: "BPH",
        formulation: "Silodosin 2/4/8 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "BPH",
        formulation: "Tamsulosin HCl IP 0.4 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "BPH",
        formulation: "Tamsulosin Hydrochloride (Modified release) 0.4 mg & Deflazacort 30 mg",
        dosageForm: "Capsules",
        type: "MR"
    },
    {
        category: "BPH",
        formulation: "Tamsulosin Hydrochloride Prolonged-release I.P. 0.2/0.4 mg",
        dosageForm: "Capsules",
        type: "PR"
    },
    {
        category: "BPH",
        formulation: "Silodosin 8 mg & Dutasteride 0.5 mg (as uncoated tablets)",
        dosageForm: "Capsules",
        type: "Uncoated"
    },
    {
        category: "Dermatological",
        formulation: "Acitretin IP 25 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Dermatological",
        formulation: "Methoxsalen USP 10 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Antiepileptic",
        formulation: "Gabapentin IP 100/300/400/450 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Antidiarrheal",
        formulation: "Loperamide Hydrochloride IP 2 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Pancreatic Enzymes",
        formulation: "Pancreatin Gastro-resistant",
        dosageForm: "Capsules",
        type: "GR"
    },
    {
        category: "Other",
        formulation: "Acebrophylline 100 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Other",
        formulation: "Acetylcysteine 300 mg & Ambroxol Hydrochloride 60 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Other",
        formulation: "Alpha Galactosidase 150 mg, Lipase, Alpha Amylase 50 mg, Protease 25 mg & Lactase 7 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Other",
        formulation: "Cyclandelate 200 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Other",
        formulation: "Cyclobenzaprine Hydrochloride ER USP 15/30 mg",
        dosageForm: "Capsules",
        type: "ER"
    },
    {
        category: "Other",
        formulation: "Danazol IP 50/100/200 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Other",
        formulation: "Orlistat USP 120 mg",
        dosageForm: "Capsules",
        type: "Standard"
    },
    {
        category: "Other",
        formulation: "Orlistat USP 60/120 mg (as Pellets)",
        dosageForm: "Capsules",
        type: "Pellets"
    },
    {
        category: "Other",
        formulation: "Pre and Probiotics",
        dosageForm: "Capsules",
        type: "Standard"
    }
    ,    // Analgesics & Antipyretics
    {
        category: "Analgesic & Antipyretic",
        formulation: "Aceclofenac 25/50 mg & Paracetamol 125 mg",
        dosageForm: "Suspension",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Ibuprofen 100 mg & Paracetamol 125/162.5 mg",
        dosageForm: "Suspension",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Mefenamic Acid 50/100 mg & Paracetamol 125/250 mg",
        dosageForm: "Suspension",
        type: "Standard"
    },
    {
        category: "Analgesic & Antipyretic",
        formulation: "Paracetamol Paediatric IP 100/125/250 mg",
        dosageForm: "Suspension",
        type: "IP"
    },

    // Anthelmintic
    {
        category: "Anthelmintic",
        formulation: "Albendazole 200 mg & Ivermectin 1.5/3 mg",
        dosageForm: "Liquid / Suspension",
        type: "Oral"
    },
    {
        category: "Anthelmintic",
        formulation: "Albendazole IP 200 mg",
        dosageForm: "Suspension",
        type: "IP"
    },

    // Antacid, Antiulcer & Antispasmodic
    {
        category: "Antacid / Antiulcer / Antispasmodic",
        formulation: "Aluminium Hydroxide 250 mg, Magnesium Hydroxide 250 mg, Simethicone 50 mg & Oxetacaine 10 mg",
        dosageForm: "Suspension",
        type: "Standard"
    },
    {
        category: "Antacid / Antiulcer / Antispasmodic",
        formulation: "Dicyclomine HCl 10 mg & Activated Dimethicone 40 mg",
        dosageForm: "Suspension",
        type: "Standard"
    },
    {
        category: "Antacid / Antiulcer / Antispasmodic",
        formulation: "Domperidone 5 mg, Dicyclomine HCl 10 mg & Dimethicone 40 mg",
        dosageForm: "Suspension",
        type: "Standard"
    },
    {
        category: "Antacid / Antiulcer / Antispasmodic",
        formulation: "Dried Aluminium Hydroxide 250 mg, Magnesium Hydroxide 250 mg & Simethicone 50 mg",
        dosageForm: "Suspension",
        type: "IP"
    },
    {
        category: "Antacid / Antiulcer / Antispasmodic",
        formulation: "Lactitol Monohydrate 66.67% w/v",
        dosageForm: "Syrup",
        type: "Osmotic Laxative"
    },
    {
        category: "Antacid / Antiulcer / Antispasmodic",
        formulation: "Lactulose Oral Solution USP 10 gm",
        dosageForm: "Syrup",
        type: "USP"
    },
    {
        category: "Antacid / Antiulcer / Antispasmodic",
        formulation: "Liquid Paraffin 1.25 ml, Milk of Magnesia 3.75 ml & Sodium Picosulphate 3.33 mg",
        dosageForm: "Suspension",
        type: "Laxative"
    },
    {
        category: "Antacid / Antiulcer / Antispasmodic",
        formulation: "Magaldrate 480/540 mg & Domperidone 10 mg / Simethicone 20-50 mg / Alginic Acid 50 mg / Oxetacaine 10 mg",
        dosageForm: "Suspension",
        type: "Various"
    },
    {
        category: "Antacid / Antiulcer / Antispasmodic",
        formulation: "Oxetacaine 10 mg, Aluminium Hydroxide 0.291 g & Magnesium Hydroxide 98 mg",
        dosageForm: "Gel",
        type: "Buffered"
    },
    {
        category: "Antacid / Antiulcer / Antispasmodic",
        formulation: "Pepsin 10 mg & Fungal Diastase 50 mg",
        dosageForm: "Syrup",
        type: "Digestive"
    },
    {
        category: "Antacid / Antiulcer / Antispasmodic",
        formulation: "Polyethylene glycol, Sodium Chloride, Sodium Bicarbonate & Potassium Chloride",
        dosageForm: "Solution",
        type: "Electrolyte / Osmotic"
    },
    {
        category: "Antacid / Antiulcer / Antispasmodic",
        formulation: "Ranitidine Oral Solution IP 75/150 mg",
        dosageForm: "Solution",
        type: "IP"
    },
    {
        category: "Antacid / Antiulcer / Antispasmodic",
        formulation: "Simethicone 40 mg, Dill Oil 0.005 ml & Fennel Oil 0.0007 ml",
        dosageForm: "Suspension",
        type: "Infant Colic"
    },
    {
        category: "Antacid / Antiulcer / Antispasmodic",
        formulation: "Sodium Picosulphate Oral Solution BP 5 mg",
        dosageForm: "Solution",
        type: "BP"
    },
    {
        category: "Antacid / Antiulcer / Antispasmodic",
        formulation: "Sucralfate 1 gm & Oxetacaine 20 mg / Sucralfate 1 gm",
        dosageForm: "Suspension",
        type: "Standard"
    },

    // Antibacterial
    {
        category: "Antibacterial",
        formulation: "Azithromycin Oral Suspension IP 100/200 mg",
        dosageForm: "Suspension",
        type: "IP"
    },
    {
        category: "Antibacterial",
        formulation: "Chloramphenicol Palmitate Oral Suspension IP 125 mg/5 ml",
        dosageForm: "Suspension",
        type: "IP"
    },
    {
        category: "Antibacterial",
        formulation: "Levofloxacin 125 mg & Ornidazole 125 mg",
        dosageForm: "Suspension",
        type: "Standard"
    },
    {
        category: "Antibacterial",
        formulation: "Levofloxacin Oral Solution 125 mg",
        dosageForm: "Solution",
        type: "Standard"
    },
    {
        category: "Antibacterial",
        formulation: "Minocycline Hydrochloride USP 50 mg",
        dosageForm: "Suspension",
        type: "USP"
    },
    {
        category: "Antibacterial",
        formulation: "Ofloxacin 100 mg & Metronidazole 200 mg / Ofloxacin 50 mg, Metronidazole 120 mg & Simethicone 10 mg",
        dosageForm: "Suspension",
        type: "Combo"
    },
    {
        category: "Antibacterial",
        formulation: "Ofloxacin Oral Suspension 50/100 mg",
        dosageForm: "Suspension",
        type: "Standard"
    },
    {
        category: "Antibacterial",
        formulation: "Rifaximin Oral Suspension 100 mg/5 ml",
        dosageForm: "Suspension",
        type: "Standard"
    },

    // Muscle Relaxant
    {
        category: "Muscle Relaxant",
        formulation: "Baclofen Oral Solution IP",
        dosageForm: "Solution",
        type: "IP"
    },

    // Iron, Calcium & Multivitamin
    {
        category: "Iron / Calcium / Multivitamin",
        formulation: "Calcium 150 mg, Vitamin D3 200 IU & Lysine Hydrochloride 20 mg",
        dosageForm: "Suspension",
        type: "Standard"
    },
    {
        category: "Iron / Calcium / Multivitamin",
        formulation: "Calcium Carbonate 150 mg, Magnesium Hydroxide 25 mg, Zinc Gluconate 1.5 mg & Vitamin D3 200 mg",
        dosageForm: "Suspension",
        type: "Standard"
    },
    {
        category: "Iron / Calcium / Multivitamin",
        formulation: "Ferrous Ascorbate 30 mg & Folic Acid 550 mcg",
        dosageForm: "Suspension",
        type: "IP"
    },
    {
        category: "Iron / Calcium / Multivitamin",
        formulation: "Ferrous Ascorbate 30 mg, Folic Acid 550 mcg & Zinc 22.5 mg",
        dosageForm: "Suspension",
        type: "Standard"
    },
    {
        category: "Iron / Calcium / Multivitamin",
        formulation: "Ferrous Bisglycinate 75 mg, Folic Acid 0.25 mg, Vitamin B12 3.75 mcg & Zinc 5.5 mg",
        dosageForm: "Syrup",
        type: "Standard"
    },
    // Iron, Calcium & Multivitamin (continued)
    {
        category: "Iron / Calcium / Multivitamin",
        formulation: "Lycopene 2000 mcg, Niacinamide 25 mg, Pyridoxine HCl 1.5 mg, Cyanocobalamin 1 mcg, Folic Acid 100 mcg, Selenium 35 mcg, Zinc 3 mg, Manganese 2 mg, Iodine 100 mcg & Copper 500 mcg",
        dosageForm: "Suspension",
        type: "Standard"
    },
    {
        category: "Iron / Calcium / Multivitamin",
        formulation: "Methylcobalamin, Cholecalciferol, Zinc Gluconate, Lysine Hydrochloride, Niacinamide, Biotin & Folic Acid",
        dosageForm: "Syrup",
        type: "Standard"
    },
    {
        category: "Iron / Calcium / Multivitamin",
        formulation: "Pyridoxine Hydrochloride 0.75 mg, Nicotinamide 15 mg, Cyanocobalamin 2 mcg & Lysine Hydrochloride 375 mg per 10 ml",
        dosageForm: "Syrup",
        type: "Standard"
    },
    {
        category: "Iron / Calcium / Multivitamin",
        formulation: "Sodium Alginate 250 mg, Sodium Bicarbonate 133.5 mg & Calcium Carbonate 80 mg",
        dosageForm: "Suspension",
        type: "Buffered"
    },
    {
        category: "Iron / Calcium / Multivitamin",
        formulation: "Sodium Feredetate 231 mg, Folic Acid 1.5 mg & Vitamin B12 15 mcg",
        dosageForm: "Suspension",
        type: "Standard"
    },
    {
        category: "Iron / Calcium / Multivitamin",
        formulation: "Sodium Feredetate Oral Solution BP",
        dosageForm: "Solution",
        type: "BP"
    },
    {
        category: "Iron / Calcium / Multivitamin",
        formulation: "Vitamin D3 Oral Solution 60000 IU/5 ml",
        dosageForm: "Solution",
        type: "High Dose"
    },
    {
        category: "Iron / Calcium / Multivitamin",
        formulation: "Zinc Acetate Oral Solution USP 20 mg",
        dosageForm: "Solution",
        type: "USP"
    },
    {
        category: "Iron / Calcium / Multivitamin",
        formulation: "Zinc Gluconate Oral Solution 20 mg",
        dosageForm: "Solution",
        type: "Standard"
    },
    {
        category: "Iron / Calcium / Multivitamin",
        formulation: "Zinc Sulphate Oral Solution IP",
        dosageForm: "Solution",
        type: "IP"
    },

    // Antiallergic / Antiasthmatic / Mucolytic
    {
        category: "Antiallergic / Antiasthmatic",
        formulation: "Ambroxol Hydrochloride 30 mg & Cetirizine Dihydrochloride 2.5 mg",
        dosageForm: "Syrup",
        type: "Combo"
    },
    {
        category: "Antiallergic / Antiasthmatic",
        formulation: "Cetirizine Dihydrochloride IP 5 mg",
        dosageForm: "Syrup",
        type: "IP"
    },
    {
        category: "Antiallergic / Antiasthmatic",
        formulation: "Fexofenadine HCl Oral Suspension 30 mg",
        dosageForm: "Suspension",
        type: "Standard"
    },
    {
        category: "Antiallergic / Antiasthmatic",
        formulation: "Hydroxyzine Hydrochloride Oral Solution IP 10 mg",
        dosageForm: "Solution",
        type: "IP"
    },
    {
        category: "Antiallergic / Antiasthmatic",
        formulation: "Levocetirizine Dihydrochloride 2.5/5 mg & Ambroxol Hydrochloride 15/30 mg",
        dosageForm: "Syrup",
        type: "Standard"
    },
    {
        category: "Antiallergic / Antiasthmatic",
        formulation: "Levocetirizine Dihydrochloride 2.5 mg & Montelukast 4 mg",
        dosageForm: "Syrup",
        type: "Standard"
    },
    {
        category: "Antiallergic / Antiasthmatic",
        formulation: "Levocetirizine Syrup 2.5 mg",
        dosageForm: "Syrup",
        type: "Standard"
    },
    {
        category: "Antiallergic / Antiasthmatic",
        formulation: "Terbutaline Sulphate & Choline Theophyllinate",
        dosageForm: "Syrup",
        type: "Bronchodilator"
    },

    // Nootropic
    {
        category: "Nootropic",
        formulation: "Citicoline 500 mg & Piracetam 400 mg/5 ml",
        dosageForm: "Syrup",
        type: "Neurotonic"
    },
    {
        category: "Nootropic",
        formulation: "Citicoline Syrup 500 mg",
        dosageForm: "Syrup",
        type: "Standard"
    },
    {
        category: "Nootropic",
        formulation: "Piracetam Syrup 500 mg",
        dosageForm: "Syrup",
        type: "Standard"
    },

    // Histamine H1 Antagonist
    {
        category: "H1 Receptor Antagonist",
        formulation: "Cyproheptadine HCl 2 mg & Tricholine Citrate 275 mg",
        dosageForm: "Syrup",
        type: "Appetizer"
    },
    {
        category: "H1 Receptor Antagonist",
        formulation: "Cyproheptadine HCl 2 mg, Tricholine Citrate 275 mg & Sorbitol 2/3.575 gm",
        dosageForm: "Syrup",
        type: "With Sorbitol"
    },
    {
        category: "H1 Receptor Antagonist",
        formulation: "Cyproheptadine Syrup IP 2 mg",
        dosageForm: "Syrup",
        type: "IP"
    },
    {
        category: "H1 Receptor Antagonist",
        formulation: "Silymarin 70 mg, Tricholine Citrate 210 mg & Sorbitol (70%) 1 gm",
        dosageForm: "Suspension",
        type: "Hepatoprotective"
    },
    {
        category: "H1 Receptor Antagonist",
        formulation: "Tricholine Citrate 550 mg & Sorbitol 7.15 gm",
        dosageForm: "Syrup",
        type: "Liver Tonic"
    },

    // Anti-inflammatory / Immunosuppressant
    {
        category: "Anti-inflammatory / Immunosuppressant",
        formulation: "Deflazacort Oral Suspension 6 mg",
        dosageForm: "Suspension",
        type: "Standard"
    },

    // Antihistaminic / Antitussive / Sympathomimetic
    {
        category: "Cough & Cold",
        formulation: "Acebrophylline 50 mg, Guaiphenesin 50 mg & Terbutaline Sulphate 1.25 mg",
        dosageForm: "Syrup",
        type: "Bronchodilator"
    },
    {
        category: "Cough & Cold",
        formulation: "Ambroxol HCl 15/30 mg, Terbutaline Sulphate 1.25 mg, Guaiphenesin 50/100 mg & Menthol 1/1.5 mg",
        dosageForm: "Syrup",
        type: "Combo"
    },
    {
        category: "Cough & Cold",
        formulation: "Ambroxol HCl 15 mg, Ammonium Chloride 60 mg, Guaiphenesin 50 mg & Menthol 1 mg",
        dosageForm: "Syrup",
        type: "Expectorant"
    },
    {
        category: "Cough & Cold",
        formulation: "Ambroxol HCl 15 mg, Levosalbutamol Sulphate 0.5 mg & Guaiphenesin 50 mg",
        dosageForm: "Syrup",
        type: "Combo"
    },
    {
        category: "Cough & Cold",
        formulation: "Dextromethorphan HBr 5–15 mg, Chlorpheniramine Maleate 1–2 mg, Phenylephrine HCl 5 mg & Menthol 1.5 mg",
        dosageForm: "Syrup",
        type: "Cough Suppressant"
    },
    {
        category: "Cough & Cold",
        formulation: "Diphenhydramine HCl 15 mg, Ammonium Chloride 138 mg, Sodium Citrate 57.5 mg & Menthol 7.5 mg",
        dosageForm: "Syrup",
        type: "Expectorant"
    },
    {
        category: "Cough & Cold",
        formulation: "Diphenhydramine Hydrochloride, Ammonium Chloride, Sodium Citrate & Menthol",
        dosageForm: "Syrup",
        type: "Standard"
    },
    {
        category: "Cough & Cold",
        formulation: "Levocloperastine Fendizoate 20 mg & Chlorpheniramine Maleate 4 mg",
        dosageForm: "Suspension",
        type: "Cough Suppressant"
    },

    {
        category: "Cough & Cold",
        formulation: "Levodropropizine 30 mg & Chlorpheniramine Maleate 2 mg",
        dosageForm: "Syrup",
        type: "Standard"
    },
    {
        category: "Cough & Cold",
        formulation: "Levodropropizine 30 mg",
        dosageForm: "Syrup",
        type: "Standard"
    },
    {
        category: "Cough & Cold",
        formulation: "Levosalbutamol 1 mg, Ambroxol HCl 30 mg & Guaiphenesin 50 mg",
        dosageForm: "Syrup",
        type: "Combo"
    },
    {
        category: "Cough & Cold",
        formulation: "Paracetamol 125–250 mg, Phenylephrine HCl 2.5–5 mg, Chlorpheniramine Maleate 1–2 mg, Sodium Citrate 60 mg, Ammonium Chloride 120 mg, Menthol 1 mg",
        dosageForm: "Syrup / Suspension",
        type: "Multi-Component"
    },
    {
        category: "Cough & Cold",
        formulation: "Phenylephrine HCl 5 mg, Chlorpheniramine Maleate 0.5–2 mg, Paracetamol 125 mg, Sodium Citrate 60 mg & Menthol 1 mg",
        dosageForm: "Syrup",
        type: "Combo"
    },
    {
        category: "Cough & Cold",
        formulation: "Terbutaline Sulphate 1.25–2.5 mg, Bromhexine HCl 2–8 mg, Guaiphenesin 50–100 mg & Menthol 0.5–5 mg",
        dosageForm: "Syrup",
        type: "Expectorant"
    },
    {
        category: "Cough & Cold",
        formulation: "Terbutaline Sulphate, Ambroxol Hydrochloride, Guaiphenesin & Menthol",
        dosageForm: "Syrup",
        type: "Combo"
    },

    // Urine Alkalizers
    {
        category: "Urine Alkalizer",
        formulation: "Disodium Hydrogen Citrate 1.40 gm",
        dosageForm: "Syrup",
        type: "Standard"
    },
    {
        category: "Urine Alkalizer",
        formulation: "Potassium Citrate 1100 mg & Citric Acid 334 mg",
        dosageForm: "Syrup",
        type: "Standard"
    },
    {
        category: "Urine Alkalizer",
        formulation: "Potassium Citrate 1100 mg, Magnesium Citrate 375 mg & Vitamin B6 20 mg per 5 ml",
        dosageForm: "Solution",
        type: "Combo"
    },
    {
        category: "Urine Alkalizer",
        formulation: "Potassium Citrate Monohydrate 1100 mg & Magnesium Citrate 375 mg",
        dosageForm: "Syrup",
        type: "Standard"
    },

    // Diuretic
    {
        category: "Diuretic",
        formulation: "Furosemide USP 10 mg",
        dosageForm: "Solution",
        type: "USP"
    },

    // Anticonvulsant / Antiepileptic
    {
        category: "Anticonvulsant / Antiepileptic",
        formulation: "Levetiracetam Oral Solution IP 500 mg",
        dosageForm: "Solution",
        type: "IP"
    },

    // Antiemetic
    {
        category: "Antiemetic",
        formulation: "Ondansetron HCl Oral Solution IP 2 mg",
        dosageForm: "Solution",
        type: "IP"
    },
    {
        category: "Antiemetic",
        formulation: "Metoclopramide Hydrochloride IP 5 mg",
        dosageForm: "Syrup",
        type: "IP"
    },

    // Antifungal
    {
        category: "Antifungal",
        formulation: "Posaconazole Oral Suspension",
        dosageForm: "Suspension",
        type: "Standard"
    },

    // Anti-Gallstones
    {
        category: "Anti-Gallstones",
        formulation: "Ursodeoxycholic Acid Oral Suspension 125/250 mg per 5 ml",
        dosageForm: "Suspension",
        type: "Standard"
    },

    // Drops
    {
        category: "Drops",
        formulation: "Cyproheptadine HCl 1.5 mg & Tricholine Citrate 55 mg",
        dosageForm: "Drops",
        type: "Pediatric"
    },
    {
        category: "Drops",
        formulation: "Dicyclomine Hydrochloride 10 mg & Simethicone 40 mg",
        dosageForm: "Drops",
        type: "Infant Colic"
    },
    {
        category: "Drops",
        formulation: "Domperidone Oral Drops 1 mg",
        dosageForm: "Drops",
        type: "Standard"
    },
    {
        category: "Drops",
        formulation: "Iron (III) Hydroxide Polymaltose 50 mg",
        dosageForm: "Drops",
        type: "Standard"
    },
    {
        category: "Drops",
        formulation: "Lacosamide Oral Solution BP 15 mg/ml",
        dosageForm: "Drops",
        type: "BP"
    },
    {
        category: "Drops",
        formulation: "Levosalbutamol Sulphate 0.25 mg, Ambroxol HCl 7.5 mg & Guaiphenesin 12.5 mg",
        dosageForm: "Drops",
        type: "Respiratory Combo"
    },
    {
        category: "Drops",
        formulation: "Paracetamol 125 mg, Phenylephrine HCl 2.5 mg & Chlorpheniramine Maleate 1 mg",
        dosageForm: "Drops",
        type: "Cold Relief"
    },
    {
        category: "Drops",
        formulation: "Phenylephrine HCl 2.5 mg & Chlorpheniramine Maleate 1 mg",
        dosageForm: "Drops",
        type: "Standard"
    },
    {
        category: "Drops",
        formulation: "Silymarin 35 mg & Tricholine Citrate 90 mg",
        dosageForm: "Drops",
        type: "Liver Tonic"
    },
    {
        category: "Drops",
        formulation: "Vitamin D3 (Cholecalciferol) 400 IU",
        dosageForm: "Drops",
        type: "Pediatric"
    }
];
export default productData;
