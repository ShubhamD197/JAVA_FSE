
public class SearchEngine {

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Phone", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Bag", "Fashion")
        };

        Product linearSearchResult = LinearSearch.search(products, 104);

        System.out.println("Linear Search Result:");
        System.out.println( linearSearchResult.getProductId() + " - " + linearSearchResult.getProductName() + " - " + linearSearchResult.getCategory());

        Product binarySearchResult = BinarySearch.search(products, 104);

        System.out.println("\nBinary Search Result:");
        System.out.println( binarySearchResult.getProductId() + " - " + binarySearchResult.getProductName() + " - " + binarySearchResult.getCategory());
    }
}
