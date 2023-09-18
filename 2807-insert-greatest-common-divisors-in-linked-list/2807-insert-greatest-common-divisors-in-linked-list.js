/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const getGcd = (a, b) => b ? getGcd(b, a % b) : a;

var insertGreatestCommonDivisors = function(head) {
    let newHead = head;
    while(head && head.next) {
        const gcd = getGcd(head.val, head.next.val);
        const tail = head.next;
        head.next = new ListNode(gcd, tail)
        head = head.next.next;
    }

    return newHead;
};