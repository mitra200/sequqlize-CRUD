import java.util.HashSet;

class firstRepetedElement{
    static int firstRepetedElements(int[] arr){
        HashSet<Integer> set = new HashSet<>();
        boolean anypositive=false;
        for(int i = 0; i < arr.length; i++){
            if(arr[i]<=0)
            continue;
            anypositive=true;
            if(set.contains(arr[i])){
                return arr[i];
            }
            else
                set.add(arr[i]);
        }
        return anypositive? arr[0]: 0;
    }
    public static void main(String[] args){
        int[] arr = {1, 2, 4, 1, 2, 8};
        System.out.println(firstRepetedElements(arr));
    }
}