package Week1.Design_Patterns_and_Principles.FactoryMethodPatternExample;

import Week1.Design_Patterns_and_Principles.FactoryMethodPatternExample.Factory.DocumentFactory;
import Week1.Design_Patterns_and_Principles.FactoryMethodPatternExample.Factory.ExcelDocumentFactory;
import Week1.Design_Patterns_and_Principles.FactoryMethodPatternExample.Factory.PdfDocumentFactory;
import Week1.Design_Patterns_and_Principles.FactoryMethodPatternExample.Factory.WordDocumentFactory;
import Week1.Design_Patterns_and_Principles.FactoryMethodPatternExample.Product.Document;

public class FactoryMethodTest {

    public static void main(String[] args) {

        DocumentFactory wordFactory = new WordDocumentFactory();
        Document wordDoc = wordFactory.createDocument();
        wordDoc.open();

        DocumentFactory pdfFactory = new PdfDocumentFactory();
        Document pdfDoc = pdfFactory.createDocument();
        pdfDoc.open();

        DocumentFactory excelFactory = new ExcelDocumentFactory();
        Document excelDoc = excelFactory.createDocument();
        excelDoc.open();
    }
}