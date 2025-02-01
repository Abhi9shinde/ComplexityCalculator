export default function Examples() {
    return (
        <>
            <section id="examples" class="bg-neutral-900 py-20 border-b border-neutral-800">
                <div class="container mx-auto px-6">
                    <h2 class="text-5xl font-extrabold text-center text-white mb-16 animate__animated animate__fadeInDown">
                        Example Analysis
                    </h2>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/*  Example 1 */}
                        <div class="bg-neutral-800 rounded-xl p-6 animate__animated animate__fadeInLeft">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="text-xl font-bold text-white">Linear Search</h3>
                                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">O(n)</span>
                            </div>
                            <div class="bg-neutral-700 rounded-lg p-4 mb-4">
                                <pre class="text-sm font-mono text-white">
                                    {`def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1`}</pre>
                            </div>
                            <div class="text-gray-300">
                                <p class="mb-2"><strong>Explanation:</strong></p>
                                <ul class="list-disc list-inside space-y-1 text-sm">
                                    <li>Single loop through array</li>
                                    <li>Each element visited once</li>
                                    <li>Time increases linearly with input size</li>
                                </ul>
                            </div>
                        </div>

                        {/* Example 2  */}
                        <div class="bg-neutral-800 rounded-xl p-6 animate__animated animate__fadeInRight">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="text-xl font-bold text-white">Binary Search</h3>
                                <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">O(log n)</span>
                            </div>
                            <div class="bg-neutral-700 rounded-lg p-4 mb-4">
                                <pre class="text-sm font-mono text-white">
                                    {`def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`}</pre>
                            </div>
                            <div class="text-gray-300">
                                <p class="mb-2"><strong>Explanation:</strong></p>
                                <ul class="list-disc list-inside space-y-1 text-sm">
                                    <li>Divides search interval in half</li>
                                    <li>Logarithmic time complexity</li>
                                    <li>More efficient than linear search</li>
                                </ul>
                            </div>
                        </div>

                        {/*  Example 3  */}
                        <div class="bg-neutral-800 rounded-xl p-6 animate__animated animate__fadeInLeft">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="text-xl font-bold text-white">Bubble Sort</h3>
                                <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">O(n²)</span>
                            </div>
                            <div class="bg-neutral-700 rounded-lg p-4 mb-4">
                                <pre class="text-sm font-mono text-white">
                                    {`def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr`}</pre>
                            </div>
                            <div class="text-gray-300">
                                <p class="mb-2"><strong>Explanation:</strong></p>
                                <ul class="list-disc list-inside space-y-1 text-sm">
                                    <li>Nested loops</li>
                                    <li>Quadratic time complexity</li>
                                    <li>Not efficient for large datasets</li>
                                </ul>
                            </div>
                        </div>

                        {/*  Example 4 */}
                        <div class="bg-neutral-800 rounded-xl p-6 animate__animated animate__fadeInRight">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="text-xl font-bold text-white">Quick Sort</h3>
                                <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">O(n log n)</span>
                            </div>
                            <div class="bg-neutral-700 rounded-lg p-4 mb-4">
                                <pre class="text-sm font-mono text-white">
                                    {`def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)`}</pre>
                            </div>
                            <div class="text-gray-300">
                                <p class="mb-2"><strong>Explanation:</strong></p>
                                <ul class="list-disc list-inside space-y-1 text-sm">
                                    <li>Divide and conquer algorithm</li>
                                    <li>Average case: O(n log n)</li>
                                    <li>Efficient for large datasets</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}