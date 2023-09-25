public class hillSum {
    public static void main(String[] args) {
        int row = 5;
        int headweight=1;
        int increment=1;
        System.out.println(ans(row, headweight, increment));
    }
    public static int ans(int row, int headweight, int increment){
        int star=headweight;
        int hash=0;
        int sum=0;
        for(int i=0; i<row; i++){
            sum+=star+hash;
            hash=star;
            star=(star/(i+1)+increment)*(i+2);
        }
        return sum;
    }
}
